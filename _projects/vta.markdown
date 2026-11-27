---
layout: page
order: 3
title: Visual Trajectory Alignment
description: Few-shot image classification with MLLMs, and a reward that keeps reasoning honest · BSc thesis
img: /assets/img/projects/vta.svg
---

BSc thesis at Macau University of Science and Technology: making multimodal LLMs classify images from only a few
examples, without letting their chain-of-thought drift into fabricated evidence.

## Approach

- **VQA instruction data.** Recast few-shot classification as visual question answering so the MLLM must ground its
  answer in the support set instead of memorised class priors.
- **Visual Trajectory Alignment (VTA).** Aligns the reasoning trajectory with the visual evidence available in the
  episode.
- **Concise Reasoning Reward.** Penalises unfounded intermediate claims — the mechanism behind the hallucination
  reduction.

## Results

- +1.74% average harmonic mean over 11 benchmarks.
- Reasoning hallucination reduced from **57.31%** to **25.05%**.
