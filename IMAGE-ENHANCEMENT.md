# Interior photo enhancement
Source: [user-supplied Google Drive photo](https://drive.google.com/file/d/1fZjfD5-j4urTi7EiXMFKldeZSNKnOPhQ/view).

Original: 960 × 1280 pixels. Enhanced result: 1086 × 1448 pixels, preserving the 3:4 portrait ratio. The requested target was 1920 × 2560; the built-in imagegen tool returned the smaller dimensions above. The saved output is retained at its actual resolution.

Method: one built-in imagegen edit; no API/CLI fallback. Enhanced image saved locally at `source-photos/interior-upscaled.png`; optimized website copy at `dist/images/interior-daylight-upscaled.webp`. The original is retained separately. The gallery's “Inside, in daylight” card and visit-section photograph use the enhancement.

Major composition, objects, room geometry and colours were compared visually with the original. This is an AI-enhanced photograph: very fine textures and small text can be reconstructed rather than recovered exactly.

## Exact prompt
> Upscale the provided real venue photograph to approximately 2x resolution, targeting 1920x2560 while preserving the exact 3:4 portrait composition, crop, camera position, wide-angle perspective, lighting, colors, and geometry. This is a conservative natural resolution and detail enhancement only: reduce compression noise and mild blur, restore plausible fine detail, and apply restrained sharpening. Preserve every existing object and venue feature exactly where it is: the blue wall and ceiling, all visible wall and ceiling marks and imperfections, ceiling lights and fixtures, hanging fluorescent fixtures, air conditioner, tables and chairs, shelves and framed items, refrigerator, counter, blue surfaces, storage bins, trays, bottles, utensils, signage and all text, the red espresso machine, and all furniture. Do not add, remove, move, redesign, repair, clean up, beautify, relight, recolor, or invent anything. Do not hallucinate or rewrite text, logos, branding, signs, architecture, amenities, textures, or objects. Keep the image documentary-realistic and faithful to the original.

