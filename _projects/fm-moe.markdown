---
layout: page
order: 2
title: Flexible Modal MoE
description: Mixture-of-experts with inter-modal knowledge distillation for face anti-spoofing · IEEE T-IFS 2026
img: /assets/img/projects/fm-moe.svg
---

**FM-MoE** learns a single framework that adapts to *any* available deployment modality for face anti-spoofing,
removing the redundant independent encoders used by prior flexible-modal methods.

## Contributions

- **Modal Inter-MoE** learns modality-general and modality-specific features jointly.
- **Modal Intra-MoE** replaces routing over patch tokens with channel-wise expert routing, capturing instance-level
  spoofing clues from the feature map.
- **MI-KDL**: Cross-Modal Loss (CML) aligns information across modalities, and Shared-to-Multi-Modal Loss (S2MML)
  transfers shared knowledge to every modality to avoid over-optimising a single one.
- Built benchmarks and wrote the manuscript; targets joint modal attacks under flexible testing protocols.

Links: [DOI](https://doi.org/10.1109/TIFS.2026.3714100)
