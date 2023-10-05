# avatar-graph-comfyui

![image](https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270574817-201a005b-7e00-4671-85a1-54937bf0704e.png)

A custom nodes module for **creating real-time interactive avatars** powered by blender bpy mesh api + Avatech Shape Flow runtime.

> **WARNING**  
> We are still making changes to the nodes and demo templates, please stay tuned.

# Demo

| <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/12e2bfc6-438e-4d16-bead-9957ced3bae1" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=cce15b92-6d1c-4966-91b9-362d7833cb5d) | <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/0c497025-7ed5-4e25-b4d1-5a257e1ba814" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=42a8182f-b140-48c0-a556-35cddf0f76f7) | <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/a2bf71e3-0d9c-4ddd-957f-a6b0cb7e622a" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=7c23b8d6-d1a5-41c7-a084-250461dbef22) | <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/ad808c42-5297-4e61-8be8-d5cb7729d2ff" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=268b32c4-f9b9-4db8-a27c-a7e974f0f0ac) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/1d1ad8f9-31a6-48ec-bad2-ce972ee3b12f" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=f97fc5bb-93b0-4b02-bbc0-327dd41d0fc5) | <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/06958585-f780-4b38-8f5d-bddabd7da78a" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=4d50aa03-26e4-47e7-97b6-c3fe9d8fc96e) | <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/3d0e6b54-d45f-45ac-90bd-d8b149880f98" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=791014cb-7836-4641-afdb-ac331064b682) | <img src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/1d1ad8f9-31a6-48ec-bad2-ce972ee3b12f" width="186"/><br>[Interact 👆](https://editor.avatech.ai/viewer?avatarId=f97fc5bb-93b0-4b02-bbc0-327dd41d0fc5) |

# How to?

- [Basic Rigging Workflow Template](#basic-workflow-template)
- [Best Practices for image input](#image-preprocess-guide)
- [Custom Nodes List](#custom-nodes)
- [Shape Flow](#shape-flow)
- [Installation](#installation)
- [Development](#development)
- [Join Discord 💬](https://discord.gg/WNtBYksDwF)

# Basic Rigging Workflow Template

### Creating an eye blink and lipsync avatar

> For optimal results, please input a character image with an open mouth and a minimum resolution of 768x768. This higher resolution will enable the tool to accurately recognize and work with facial features.
>
> [💡Make your character mouth open Guide](#mouth-open-guide-inpaint) [💡Generate new image Guide](#character-gen-prompting-guide)

![eye+mouth movement](https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270634138-8a237b9d-05fc-4e4a-b802-6465911f0d77.png)
Download: 📂[Template01 - Simple Shape Flow](https://github.com/avatechai/avatar-graph-comfyui/blob/main/workflow_templates/SimpleEye+MouthMovement.json)

Download: 📂[Template01 - ControlNet Gen](https://github.com/avatechai/avatar-graph-comfyui/tree/main/workflow_templates/TemplateGen01)
_If you don't want to modify any values in the custom nodes, you can download the ControlNet Gen Template to generate your own image._

<details> 
<summary> Template01 - Nodes Value Setting Guide </summary>

## Template01 - Nodes Value Setting Guide

> ### Basic Eyeblink & Talking
>
> 1. Click **[Segmentation (SAM)]/ Edit prompt** button
> 2. Add new layer and rename
>
> 3. Drag layer to **[Create Mesh Layer]/image**
>
> 4. **[Create Mesh Layer]/ face_threshold, shape_threshold**, To control mesh threshold, recommend value: 0.6~0.7
> 5. **[Create Mesh Layer]/ scale_x, scale_y, extrude_x, extrude_y**, To control mesh threshold, recommend value: 1.2~1.4
>
> 6. **[Modify Shape Key]/ rotate** Setting Reference, If Head tilted to the left, set a positive number angle
>
> | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/271264869-abf2a843-8ca5-44a6-9611-c334d55928d1.png" width="300"> | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/271264902-37658a8e-6f46-4c5b-bfd6-adec270df60b.png" width="300"> | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/271264910-0fae0c27-428d-4a5d-8296-6634c9717b95.png" width="300"> | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/271264920-4fea7882-cc51-4a5a-af9a-e66589810f92.png" width="300"> |
> | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | 0                                                                                                                                                                    | 5                                                                                                                                                                    | -5                                                                                                                                                                   | -15                                                                                                                                                                  |

</details>

<details> 
    
<summary> Template01 - ControlNet Gen Guide </summary>

Place normal and openpose image with reference to images.

![image](https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270943267-c3cae113-2df4-45f2-a19c-885cbee75450.png)

</details>

# Image Preprocess Guide

## Generate a new character image

> We need a character image with an open mouth and enable the tool to easily recognize facial features, so please add to the prompt:
>
> `looking at viewer, detailed face, open mouth, [smile], solo,eye-level angle`

![image](https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270609114-acea9933-359b-4398-8d2a-582bf02bef99.png)

Download: 📂[Character Gen Template](https://github.com/avatechai/avatar-graph-comfyui/blob/main/workflow_templates/SimpleCharacterGen.json)
Feel free to change any checkpoint model that suits your needs.

## Make existing character image mouth open (Inpaint)

To maintain consistency with the base image, it is recommended to utilize a checkpoint model that aligns with its style.

![inpaint_workflow](https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270589181-d11d840b-7ea6-4b47-bc26-a2af7c8c27a5.png)

Download: 📂[MouthOpen Template](<https://github.com/avatechai/avatar-graph-comfyui/blob/main/workflow_templates/MouthOpen_(inpaint).json>)

<details>
<summary> Inpaint Demonstration </summary>

<video src="https://github.com/avatechai/avatar-graph-comfyui/assets/73209427/e3b77295-a1bf-4d96-9551-7cc423a4af73"/>

</details>

# Recommend Checkpoint Model List

##### Anime Style SD1.5

- https://civitai.com/models/35960/flat-2d-animerge
- https://civitai.com/models/24149/mistoonanime

##### Realistic Style SD1.5

- https://civitai.com/models/4201/realistic-vision-v51
- https://civitai.com/models/49463/am-i-real
- https://civitai.com/models/43331/majicmix-realistic

# Custom Nodes

Expand to see all the available nodes description

<details>
<summary> Image Segmentation Nodes </summary>

## Image Segmentation Nodes

| Name                 | Description                                                                                    | Preview                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Segmentation (SAM)` | Integrative SAM node allowing you to directly select and create multiple image segment output. | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270576351-8aabeba8-5450-4d39-8203-e91f9ab47190.png" width="300"> |

</details>

<details>
<summary> Mesh Edit Nodes </summary>

## Mesh Edit Nodes

| Name                         | Description                                                                                     | Preview                                                                                                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Create Mesh Layer`          | Create a mesh object from the input images (usually a segmented part of the entire image)       | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270576646-40740d25-9411-4cd3-a6c0-8b9008bca41c.png" width="300"> |
| `Join Meshes`                | Combine multiple meshes into a single mesh object                                               | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270577004-ba7afbc5-9cd5-4f97-9614-f71133f5783e.png" width="300"> |
| `Match Texture Aspect Ratio` | Since the mesh is created in 1:1 aspect ratio, a re-scale is needed at the end of the operation | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270602782-cb7155be-fb31-49f8-a24a-d001a1484ea7.png" width="300"> |
| `Plane Texture Unwrap`       | Will perform mesh face fill and UV Cube project on the target plane mesh, scaled to bounds.     | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270603006-4b9c0cf5-0497-47bf-8e06-5a3370084c11.png" width="300"> |

</details>

<details>
<summary> Shape Keys Nodes </summary>

## Shape Keys Nodes

| Name                    | Description                                                                                        | Preview                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Mesh Modify Shape Key` | Given shape key name & target vertex_group, modify the vertex / all vertex’s transform             | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270577944-ab4f259c-89a7-4f51-bc54-fd179e252073.png" width="300"> |
| `Create Shape Flow`     | Create runtime shape flow graph, allowing interactive inputs affecting shape keys value in runtime | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270592752-abfdd801-0387-4c5d-9c11-6c23337ff1dd.png" width="300"> |

</details>

<details>
<summary> Avatar Output Nodes </summary>

## Avatar Output Nodes

| Name                 | Description                                                                                           | Preview                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Avatar Main Output` | The primary output of the .ava file. The embeded Avatar View will auto update with this node's output | <img src="https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270592519-6a9a8bb4-05ec-4a2e-98bf-194b6af3a62a.png" width="300"> |

</details>

# Shape Flow

![image](https://avatech-avatar-dev1.nyc3.cdn.digitaloceanspaces.com/public-download/github-readme/270618471-a834e535-4f87-4b77-81a6-435e3a67ca4a.png)

# Installation

Clone the repository to custom_nodes in your [ComfyUI](https://github.com/comfyanonymous/ComfyUI) directory:

1. `cd custom_nodes`

2. `git clone https://github.com/avatechgg/avatar-graph-comfyui.git`

3. Install deps `cd avatar-graph-comfyui && python -m pip install -r requirements.txt`

4. Restart comfyui

5. Run comfyui with enable-cors-header `python main.py --enable-cors-header` or (mac)`python main.py --force-fp16 --enable-cors-header`

# Development

<details>
<summary> If you are interested in contributing expand to see development details </summary>

For comfyui frontend extension, frontend js located at `avatar-graph-comfyui/js`

Web stack used: [vanjs](https://github.com/vanjs-org/van) [tailwindcss](https://github.com/tailwindlabs/tailwindcss)

## Install deps

```
pnpm i
```

Run the dev command to start the tailwindcss watcher

```
pnpm dev
```

For each changes, simply refresh the comfyui page to see the changes.

<details>
<summary>p.s. For tailwind autocomplete, add the following to your vscode settings.json.</summary>
    
```json
{
    "tailwindCSS.experimental.classRegex": [
        ["class\\s?:\\s?([\\s\\S]*)", "(?:\"|')([^\"']*)(?:\"|')"]
    ]
}
```

</details>

</details>
