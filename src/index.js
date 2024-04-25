import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Curve3} from "@babylonjs/core/Maths/math.path";
import { Color3 } from "@babylonjs/core";
import ScenePreview from "./scenes";

const tmpWidth = 30;
const tmpHeight = 30;
const halfWidth = tmpWidth * 0.5;
const halfHeight = tmpHeight * 0.5;

const currentScenePreview = new ScenePreview(
  document.getElementById("3d-preview"),
  {
    width: tmpWidth,
    height: tmpHeight,   
    path: [
        new Vector3(-halfWidth, -halfHeight, 0),
        new Vector3(halfWidth, -halfHeight, 0),
        // new Vector3(halfWidth * 1.25, -halfHeight * 0.5, 0),
        new Vector3(halfWidth, halfHeight, 0),
        new Vector3(-halfWidth, halfHeight, 0)
    ],
    profiles: [
        {
          name: "outerFrame",
          profile: [          
              new Vector3(0, 0, 0),
              new Vector3(4.1, 0, 0),
              new Vector3(5.2, 1.1, 0),
              new Vector3(5.2, 1.5, 0),
              new Vector3(2.93, 1.5, 0),
              new Vector3(3.08, 3.27, 0),
              new Vector3(3.37, 3.27, 0),
              new Vector3(3.37, 3.77, 0),
              new Vector3(3.2, 3.77, 0),
              new Vector3(3.2, 3.44, 0),
              new Vector3(2.9, 3.44, 0),
              new Vector3(2.9, 5.7, 0),
              new Vector3(3.2, 5.7, 0),
              new Vector3(3.2, 5.6, 0),
              new Vector3(3.37, 5.6, 0),
              new Vector3(3.37, 6, 0),
              new Vector3(3.37, 6, 0),
              new Vector3(0, 6, 0),
        
              new Vector3(0, 5.5, 0),
              new Vector3(0.24, 5.5, 0),
              new Vector3(0.24, 5.8, 0),
              new Vector3(0.74, 5.8, 0),
              new Vector3(0.74, 4.8, 0),
              new Vector3(0, 4.8, 0),

              new Vector3(0, 4.2, 0),
              new Vector3(0.24, 4.2, 0),
              new Vector3(0.24, 4.6, 0),
              new Vector3(0.74, 4.6, 0),
              new Vector3(0.74, 1.5, 0),
              new Vector3(0.24, 1.5, 0),
              new Vector3(0.24, 1.9, 0),
              new Vector3(0, 1.9, 0),

              new Vector3(0, 1.24, 0),
              new Vector3(0.74, 1.24, 0),
              new Vector3(0.74, 0.22, 0),
              new Vector3(0.26, 0.22, 0),    
                   
              new Vector3(0.26, 0.55, 0),
              new Vector3(0, 0.55, 0)              
          ],
          holes: [
            {
              profile: [          
                new Vector3(0, 0, 0),
                new Vector3(1.38, 0, 0),
                new Vector3(1.91, 0.5, 0),
                new Vector3(1.72, 0.74, 0),
                new Vector3(1.72, 0.95, 0),
                new Vector3(0.31, 0.95, 0),
                new Vector3(0.19, 1.07, 0),
                new Vector3(0, 0.88, 0),
              ],
              offset: new Vector3(2.6, 2.6, 0.29)
            },
            {
              profile: [          
                new Vector3(0, 0, 0),
                new Vector3(1.58, 0, 0),
                new Vector3(1.58, 0.38, 0),
                new Vector3(0, 0.38, 0),               
              ],
              offset: new Vector3(0.9, 0.9, 0.29)
            },
            {
              profile: [          
                new Vector3(0, 0, 0),
                new Vector3(1.58, 0, 0),
                new Vector3(1.58, 0.38, 0),
                new Vector3(0, 0.38, 0),               
              ],
              offset: new Vector3(0.9, 0.9, 0.72)
            },
            {
              profile: [          
                new Vector3(0, 0, 0),
                new Vector3(1.65, 0, 0),
                new Vector3(1.84, 0.19, 0),
                new Vector3(1.96, 2.02, 0),
                new Vector3(1.79, 2.17, 0),
                new Vector3(1.79, 4.56, 0),
                new Vector3(0, 4.56, 0),
              ],
              offset: new Vector3(0.9, 0.9, 1.22)
            },
          ],
          offset: Vector3.Zero(),
          color: Color3.Gray(),
          withGlass: false
      },
      {
        name: "innerFrame",
        profile: [
          new Vector3(2.08, 0, 0),     
          new Vector3(6.54, 0, 0), 
          new Vector3(7.66, 1.1, 0),
          new Vector3(7.66, 1.4, 0),

          new Vector3(5.4, 1.4, 0),
          new Vector3(5.5, 3.41, 0),
          new Vector3(5.83, 3.41, 0),
          new Vector3(5.83, 3.75, 0),
          new Vector3(5.49, 3.75, 0),
          new Vector3(5.49, 4.94, 0),
          new Vector3(7.81, 4.94, 0),
          new Vector3(7.81, 5.3, 0),         

          new Vector3(7.06, 6, 0),
          new Vector3(0, 6, 0),

          new Vector3(0, 4.61, 0),
          new Vector3(2.08, 4.61, 0),
          new Vector3(2.08, 3.8, 0),
          new Vector3(2.34, 3.8, 0),
          new Vector3(2.34, 3.6, 0),
          new Vector3(3.3, 3.6, 0),
          new Vector3(3.3, 2.4, 0),
          new Vector3(2.34, 2.4, 0),
          new Vector3(2.34, 2.17, 0),
          new Vector3(2.08, 2.17, 0),
          new Vector3(2.08, 2, 0),
          new Vector3(2.34, 2, 0),
          new Vector3(2.34, 0.24, 0),
          new Vector3(2.08, 0.24, 0),

        ],
        holes: [
          {
            profile: [          
              new Vector3(0, 0, 0),
              new Vector3(1.38, 0, 0),
              new Vector3(2.29, 0.88, 0),
              new Vector3(2.29, 0.95, 0),
              new Vector3(0.38, 0.95, 0),
              new Vector3(0.2, 1.07, 0),
              new Vector3(0, 0.88, 0),
            ],
            offset: new Vector3(7.5, 7.5, 0.26)
          },
          {
            profile: [          
              new Vector3(0, 0, 0),
              new Vector3(2.41, 0, 0),
              new Vector3(2.41, 0.38, 0),
              new Vector3(0, 0.38, 0),
            ],
            offset: new Vector3(5, 5, 0.26)
          },
          {
            profile: [          
              new Vector3(0, 0, 0),
              new Vector3(2.41, 0, 0),
              new Vector3(2.41, 0.38, 0),
              new Vector3(0, 0.38, 0),
            ],
            offset: new Vector3(5, 5, 0.74)
          },
          {
            profile: [          
              new Vector3(0, 0, 0),
              new Vector3(2.43, 0, 0),
              new Vector3(2.63, 0.2, 0),
              new Vector3(2.77, 2, 0),
              new Vector3(2.63, 2.17, 0),
              new Vector3(2.63, 4.53, 0),
              new Vector3(0.12, 4.53, 0),
              new Vector3(0, 4.18, 0),
              new Vector3(0, 2.6, 0),
              new Vector3(0.95, 2.6, 0),
              new Vector3(0.95, 0.98, 0),
              new Vector3(0, 0.98, 0),
            ],
            offset: new Vector3(5, 5, 1.22)
          },
          {
            profile: [          
              new Vector3(0, 0, 0),
              new Vector3(1.2, 0, 0),
              new Vector3(1.2, 0.93, 0),
              new Vector3(0, 0.93, 0),
            ],
            offset: new Vector3(3.37, 3.37, 4.82)
          },
          {
            profile: [          
              new Vector3(0, 0, 0),
              new Vector3(0.53, 0, 0),
              new Vector3(0.53, 0.53, 0),
              new Vector3(0, 0.53, 0),
            ],
            offset: new Vector3(2.7, 2.7, 5.2)
          },
          {
            profile: [          
              new Vector3(0, 0, 0),
              new Vector3(2.3, 0, 0),
              new Vector3(2.3, 0.1, 0),
              new Vector3(1.72, 0.7, 0),
              new Vector3(0, 0.7, 0),
            ],
            offset: new Vector3(7.8, 7.8, 5.1)
          },
        ],
        offset: new Vector3(2.48, 2.48, 1.77),
        color: new Color3(1, 0, 0),
        withGlass: {
          glassCount: 2,
          glassOffset: new Vector3(-8.66, -8.66, 3.44 + 1.43),
          glassWidth: tmpWidth,
          glassHeight: tmpHeight,
          glassDepth: 2.86
        }
      },
      {
        name: "glassFrame",
        profile: [
          new Vector3(0.07, 0, 0),
          new Vector3(0.84, 0, 0),
          new Vector3(0.84, 3.03, 0),
          new Vector3(0.69, 3.03, 0),
          new Vector3(0.43, 2.53, 0),
          new Vector3(0.43, 1.72, 0),
          new Vector3(0.09, 1.72, 0),
          new Vector3(0, 0.5, 0),
          new Vector3(0.33, 0.5, 0),
          new Vector3(0.33, 0.21, 0),
          new Vector3(0.07, 0.21, 0),
        ],
        holes: [],
        offset: new Vector3(7.865, 7.865, 3.17),
        color: new Color3(0.8, 0.8, 0.8),
        withGlass: false
      },
      {
        name: "frameSealant",
        profile: [          
          new Vector3(0, 0, 0),
          new Vector3(0.2, 0, 0),
          new Vector3(0.4, 0.2, 0),
          new Vector3(0, 0.2, 0)            
        ],
        holes: [],
        offset: new Vector3(5.0, 5.0, 1.55),
        color: new Color3(0, 0, 0),
        withGlass: false
      },
      {
        name: "frameSealant",
        profile: [          
          new Vector3(0, 0, 0),
          new Vector3(0.4, 0, 0),
          new Vector3(0.4, 0.35, 0),
          new Vector3(0, 0.35, 0)           
        ],
        holes: [],
        offset: new Vector3(2.5, 2.5, 6.01),
        color: new Color3(0, 0, 0),
        withGlass: false
      },
      {
        name: "glassSealant",
        profile: [          
          new Vector3(0, 0, 0),
          new Vector3(0.72, 0, 0),
          new Vector3(1, 0.29, 0),
          new Vector3(0, 0.29, 0)           
        ],
        holes: [],
        offset: new Vector3(9.38, 9.38, 3.165),
        color: new Color3(0, 0, 0),
        withGlass: false
      },
      {
        name: "glassSealant",
        profile: [          
          new Vector3(0, 0, 0),
          new Vector3(1.05, 0, 0),
          new Vector3(0.72, 0.375, 0),
          new Vector3(0, 0.375, 0)           
        ],
        holes: [],
        offset: new Vector3(9.6, 9.6, 6.32),
        color: new Color3(0, 0, 0),
        withGlass: false
      }
    ] 
  }
);
