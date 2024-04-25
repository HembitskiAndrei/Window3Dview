import "@babylonjs/core/Rendering/geometryBufferRendererSceneComponent";
import "@babylonjs/core/Rendering/geometryBufferRenderer";
import "@babylonjs/core/Rendering/prePassRendererSceneComponent";
import "@babylonjs/core/Rendering/prePassRenderer";
import "@babylonjs/core/Rendering/depthPeelingSceneComponent";
import "@babylonjs/core/Rendering/depthPeelingRenderer";
import "@babylonjs/core/Helpers/sceneHelpers";
import "@babylonjs/core/Loading/loadingScreen";
import {Scene} from "@babylonjs/core/scene";
import {Plane} from "@babylonjs/core/Maths/math.plane";
import {Color4, Color3} from "@babylonjs/core/Maths/math.color";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import {Quaternion, Vector2, Vector3} from "@babylonjs/core/Maths/math.vector";
import {Curve3} from "@babylonjs/core/Maths/math.path";
import {Texture} from "@babylonjs/core/Materials/Textures/texture";
import {AssetsManager} from "@babylonjs/core/Misc/assetsManager";
import {Axis, Space} from "@babylonjs/core/Maths/math.axis";
import {MeshBuilder} from "@babylonjs/core/Meshes/meshBuilder";
import {Layer} from "@babylonjs/core/Layers/layer";
import "@babylonjs/core/Misc/screenshotTools";
import {Tools} from "@babylonjs/core/Misc/tools";
import createEnvironment from "../utils/createEnvironment";
import pickMaterial from "../utils/pickMaterial";
import windowFrame from "../utils/windowFrame";
import windowGlass from "../utils/windowGlass";
import canvasMaker from "../utils/canvasMaker";
import createBracing from "../utils/createBracing";
import Camera from "../camera";
import settingsRopeTextures from "../utils/settingsRopeTextures";
import setBabylonProfile from "../utils/setBabylonProfile";
import curvedFrameProfile from "../utils/curvedFrameProfile";
import createAcrylicBracing from "../utils/createAcrylicBracing";
import createCoasters from "../utils/createCoasters";
import addHoles from "../utils/addHoles";
import setEdgeTextureScale from "../utils/setEdgeTextureScale";
import {compositeGatorFoamHanger, compositeWoodHanger} from "../utils/compositeGatorFoamHanger";
import checkStandout from "../utils/checkStandout";
import getHanger from "../utils/getHanger";
import createHanger from "../utils/createHanger";
import acrylicHanger from "../utils/acrylicHanger";
import xposerHanger from "../utils/xposerHanger";
import greetingCard from "../utils/greetingCard";
import textToTexture from "../utils/textToTexture";
import addLogoToGreetingCard from "../utils/addLogoToGreetingCard";
import blackDotsForBackSkeleton from "../utils/blackDotsForBackSkeleton";
import getRestrictiveSize from "../utils/getRestrictiveSize";
import { ASSETS_URL } from "../utils/constants";

export default class MainScene extends Scene {
    constructor(windowConfig, engine, canvas, options) {
        super(engine, options);
        this.sceneConfig = {    
            width: 1,
            height: 1,
            glassWidth: 1,
            glassHeight: 1,
            glassThickness: 0.1,
            path: [
                new Vector3(-1, -1, 0),
                new Vector3(1, -1, 0),
                new Vector3(1, 1, 0),
                new Vector3(-1, 1, 0)
            ],
            profiles: [{
                profile: [
                    new Vector3(-1, -1, 0),
                    new Vector3(1, -1, 0),
                    new Vector3(1, 1, 0),
                    new Vector3(-1, 1, 0)
                ],
                offset: Vector3.Zero()
            }],   
            ...windowConfig
        }

        this.engine = engine;
        this.canvas = canvas;
        
        const layerColor = Color3.White();       
        
        new Layer("back", `${ASSETS_URL}/assets/scene_preview/textures/background.png`, this, true, new Color4(layerColor.r, layerColor.g, layerColor.b, 1.0));

        this.assetsManager = new AssetsManager(this);

        this.camera = new Camera(Math.PI * 0.5, Math.PI * 0.5, 0, Vector3.Zero(), 20, 230, this);
        this.camera.attachControl();

        createEnvironment(this);
        this.useOrderIndependentTransparency = true;

        // this.clipPlane = new Plane(1, 0, 0, 0);
        // this.clipPlane2 = new Plane(0, 1, 0, 0);
       
        const {
            glassWidth, 
            glassHeight,
            glassThickness,           
            path,
            profiles            
        } = this.sceneConfig;        
        
        // middle point
        let sumX = 0;
        let sumY = 0;
        path.forEach(point => {
             sumX += point.x;   
             sumY += point.y;
        })
        const numPoints = path.length
        const middlePoint = new Vector2(sumX / numPoints, sumY / numPoints);        
        //

        // scale function
        function calculateScale(offset, points) {
            
            return points.map( (p, i) => {  

                 const nextInddex = i + 1;
                 const prevInddex = i - 1;      
                 
                 const nextPoint = points[nextInddex <= points.length - 1 ? nextInddex : 0];
                 const prevPoint = points[prevInddex >= 0 ? prevInddex : points.length - 1];
              
                 const leftVector = nextPoint.subtract(p);
                 const leftVectorNormal = new Vector2(-1 * leftVector.y, leftVector.x).normalize();
                 const leftVectorNormalLength = leftVectorNormal.length();
                 const leftVectorNormalScaled = leftVectorNormal.scale(offset.x / leftVectorNormalLength);
                 const leftVectorNormalScaledLength = leftVectorNormalScaled.length();
                 const leftVectorOrt = leftVector.scale(1 / leftVector.length());
                
                 const rightVector = prevPoint.subtract(p);
                 const rightVectorNormal = new Vector2(rightVector.y, -1 * rightVector.x).normalize();
                 const rightVectorNormalLength = rightVectorNormal.length();
                 const rightVectorNormalScaled = rightVectorNormal.scale(offset.x / rightVectorNormalLength);
                 const rightVectorNormalScaledLength = rightVectorNormalScaled.length();
                 const rightVectorOrt = rightVector.scale(1 / rightVector.length());

                 const angleCos = 0.5 * Vector2.Dot(leftVectorNormalScaled, rightVectorNormalScaled) / (leftVectorNormalScaledLength * rightVectorNormalScaledLength);
                
                 let cLength = new Vector2(offset.x, offset.y).length();
                 if (angleCos !== 0) {
                    console.log("=================================================")
                    console.log("angleCos", angleCos)
                    console.log("leftVectorNormalScaledLength", leftVectorNormalScaledLength)
                    cLength = leftVectorNormalScaledLength / angleCos;
                    console.log("cLength", cLength)
                    console.log("leftVectorNormalScaledLength", leftVectorNormalScaledLength)
                    console.log("=================================================")
                 }
                 const totalVector1 = rightVectorNormalScaled.add(leftVectorNormalScaled);
                //  const totalVector = leftVectorOrt.add(rightVectorOrt);
                //  const normalizedTotalVector2 = new Vector2(totalVector.x, totalVector.y).normalize();
                //  const offsetLength = new Vector2(offset.x, offset.y).length();   
                //  console.log("offsetLength", offsetLength)
                //  const longTotalVector = totalVector.scale(offsetLength / Math.sqrt(totalVector.x**2 + totalVector.y**2));
                 const longTotalVector1 = totalVector1.scale(cLength / totalVector1.length())
                //  const endPoint = longTotalVector.add(p);
                 const endPoint = longTotalVector1.add(p);          
              
                // console.log(cLength, endPoint)
                 if (i === 3) {                    
                    const currentPointMesh = MeshBuilder.CreateSphere("currentPointMesh", {diameter: 0.25});
                    currentPointMesh.position.x = p.x;
                    currentPointMesh.position.y = p.y;
                    currentPointMesh.position.z += 1;
                    const currentPointMeshMaterial = new PBRMaterial("currentPointMeshMaterial", this);
                    currentPointMeshMaterial.metallic = 0;         
                    currentPointMeshMaterial.albedoColor = Color3.Purple();               
                    currentPointMesh.material = currentPointMeshMaterial;  

                    const nextPointMesh = MeshBuilder.CreateSphere("nextPointMesh", {diameter: 0.25});
                    nextPointMesh.position.x = nextPoint.x;
                    nextPointMesh.position.y = nextPoint.y;
                    nextPointMesh.position.z += 0.9;
                    const nextPointMeshMaterial = new PBRMaterial("nextPointMeshMaterial", this);
                    nextPointMeshMaterial.metallic = 0;         
                    nextPointMeshMaterial.albedoColor = Color3.Green();               
                    nextPointMesh.material = nextPointMeshMaterial;  

                    const prevPointMesh = MeshBuilder.CreateSphere("prevPointMesh", {diameter: 0.25});
                    prevPointMesh.position.x = prevPoint.x;
                    prevPointMesh.position.y = prevPoint.y;
                    prevPointMesh.position.z += 1.1;
                    const prevPointMeshMaterial = new PBRMaterial("prevPointMeshMaterial", this);
                    prevPointMeshMaterial.metallic = 0;         
                    prevPointMeshMaterial.albedoColor = Color3.Blue();               
                    prevPointMesh.material = prevPointMeshMaterial;  
                }

                if (i === 3) {                   
                 const pointMesh = MeshBuilder.CreateSphere("pointMesh", {diameter: 0.25});
                 pointMesh.position.x = endPoint.x;
                 pointMesh.position.y = endPoint.y;
                 pointMesh.position.z += 1;
                 const pointMeshMaterial = new PBRMaterial("pointMeshMaterial", this);
                 pointMeshMaterial.metallic = 0;         
                 pointMeshMaterial.albedoColor = Color3.Red();               
                 pointMesh.material = pointMeshMaterial;  

                 const myColors = [
                    new Color4(1, 0, 0, 1),
                    new Color4(0, 1, 0, 1),
                    new Color4(0, 0, 1, 1),
                    new Color4(1, 1, 0, 1)
                ]
                const myColorsLeft = [
                    new Color4(1, 0, 0, 1),
                    new Color4(1, 0, 0, 1) 
                ]
                const myColorsRight = [
                    new Color4(0, 0, 1, 1),
                    new Color4(0, 0, 1, 1),               
                ]
                const myColorsNormal = [
                    new Color4(0, 1, 1, 1),
                    new Color4(0, 1, 1, 1),               
                ]
                const myColorsTotal = [
                    new Color4(1, 1, 0, 1),
                    new Color4(1, 1, 0, 1),               
                ]
                //  const line = MeshBuilder.CreateLines("line", {points: [new Vector3(p.x, p.y, 1), new Vector3(endPoint.x, endPoint.y, 1)], colors: myColors})
                 const lineLeft = MeshBuilder.CreateLines("lineLeft", {points: [new Vector3(p.x, p.y, 1), new Vector3(nextPoint.x, nextPoint.y, 1)], colors: myColorsLeft})
                 const lineLeftNormal = MeshBuilder.CreateLines("lineLeftNormal", {points: [new Vector3(p.x, p.y, 1), new Vector3(leftVectorNormalScaled.x + p.x, leftVectorNormalScaled.y + p.y, 1)], colors: myColorsNormal})
                 const lineLeftNormal1 = MeshBuilder.CreateLines("lineLeftNormal1", {points: [new Vector3(p.x, p.y, 1), new Vector3(rightVectorNormalScaled.x + p.x, rightVectorNormalScaled.y + p.y, 1)], colors: myColorsNormal})
                 const lineRight = MeshBuilder.CreateLines("lineRight", {points: [new Vector3(p.x, p.y, 1), new Vector3(prevPoint.x, prevPoint.y, 1)], colors: myColorsRight})

                 const lineTotal = MeshBuilder.CreateLines("lineTotal", {points: [new Vector3(p.x, p.y, 1), new Vector3(endPoint.x, endPoint.y, 1)], colors: myColorsTotal})
                }
                 return new Vector3(endPoint.x, endPoint.y, 0);                
                }
            );
        }
        //

        profiles.forEach(p => {            
            
            // new path   
            let tmpPath = path;
            if (p.offset.x !== 0) {
                tmpPath = calculateScale(p.offset, path);
            }
            //

            const frame = windowFrame({path: tmpPath, profile: p.profile, color: p.color}, this);
            frame.nodeWindowFrame.position.z += p.offset.z;
        })
        // const glass = windowGlass({width: glassWidth, height: glassHeight, depth: glassThickness}, this);
              
        this.executeWhenReady(() => {  
            // this.camera.useAutoRotationBehavior = true;
            // this.camera.autoRotationBehavior.idleRotationSpeed = 0.25;              
            // this.camera.setTarget(frame.nodewindowFrame.getChildMeshes()[0]);           
        })

        this.assetsManager.onFinish = () => {           
            this.executeWhenReady(() => {
                // this.camera.useAutoRotationBehavior = true;
                // this.camera.autoRotationBehavior.idleRotationSpeed = 0.25;                        
            })
        };
       
        this.engine.runRenderLoop(() => {
            this.render();
        });

        this.assetsManager.load();
    }  
}
