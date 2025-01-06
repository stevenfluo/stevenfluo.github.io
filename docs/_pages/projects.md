---
layout: single
permalink: /projects/
title: "Projects"
excerpt: "Projects"
author_profile: true
classes: wide
redirect_from:
    - /project
    - /proj/
    - /projects
    - /proj
---
**Face Morphing** ([Website](https://stevenfluo.github.io/facemorph/))<br/>
I produce “morph” animations of faces into different faces, compute the mean of a population of faces, and change the ethnicity of a friend's face using only classical computer vision techniques.

**Autostitching Photo Mosaics** ([Website](https://stevenfluo.github.io/mosaics/))<br/>
Casual imagery of a scene is not necessarily captured in a way conducive for panorama creation. I use photographs of a scene to create image mosaics by registering, projective warping, resampling, and compositing them. I compute homographies to warp images, then use a Laplacian stack to blend images into the final mosaic. I then automate correspondence-finding by implementing Harris interest point detection, followed by adaptive non-maximal suppression to limit the number of interest points while maintaining a good spatial distribution over the entire image, scoring and thresholding to extract good matches, then using random sample consensus to find an ideal homography.

**Diffusion Models** ([Website](https://stevenfluo.github.io/diffusion/))<br/>
Using Stability AI’s DeepFloyd IF two-stage diffusion model, I implement sampling loops for classical, one-step, and iterative denoising; obtain high quality samples with classifier-free guidance; perform image-to-image translation with the SDEdit algorithm; and create visual anagrams and hybrid images. Then, I train my own diffusion model (using the UNet architecture) to generate digits from the MNIST dataset. I start by building a one-step denoiser, then add time and class-conditioning for iterative denoising.

**Lightfield Camera and High Dynamic Range Imaging** ([Website](https://stevenfluo.github.io/180final/))<br/>
To recreate the effects of the Lytro lightfield camera, I use rectified images provided in the Stanford Light Field Archive and apply alignment and averaging methods to implement depth refocusing and aperture adjustment, allowing for post-capture changes in the camera setup. In order to fix image over/under-exposure, I implement tools to automatically combine multiple exposures into a single high dynamic range radiance map, and then convert this radiance map to an image suitable for display through tone mapping.

**Colorizing the Prokudin-Gorskii Photo Collection** ([Website](https://stevenfluo.github.io/Prokudin-Gorskii/))<br/>
Using three black-and-white negatives, I use image processing techniques to align these plates and produce a color image with minimal artifacts.

**Fun With Filters and Frequencies** ([Website](https://stevenfluo.github.io/filters-frequencies/))<br/>
I visualize image edge detection and convolution, implement image sharpening, create hybrid images (static images that change while varying viewing distance), and perform multi-resolution blending with Gaussian and Laplacian stacks.

# Papers & Publications
**From Simulation to Reality with Random Noise**<br/>
**Steven Luo**, Rory Lipkis, Ignacio G. Lopez-Francos, Pavlo G. Vlastos and Adrian Agogino<br/>
2025 AIAA SciTech Forum: [Conference Paper](https://arc.aiaa.org/doi/10.2514/6.2025-1731) and Technical Presentation