---
layout: page
order: 1
title: LocalAgent
venue: NeurIPS 2026
description: Collaborative agentic verification for fine-grained instance-level consistency.
img: /assets/img/projects/localagent-cover.jpg
img_fit: contain
links:
  - label: Paper (arXiv)
    url: https://arxiv.org/abs/2610.29174
    icon: article
  - label: OpenReview
    url: https://openreview.net/forum?id=nJtBeEwjzg
    icon: open_in_new
  - label: Code
    url: https://github.com/Firefly-zoo/LocalAgent-main
    icon: code
---

**LocalAgent** verifies whether two images depict the *exact same* physical object under varying viewpoints,
illumination, and background. In this task, semantically similar but different instances differ only in small
suspicious regions.

<figure>
  <img src="{{ site.baseurl }}/assets/img/projects/localagent-framework.png" alt="Overview of the LocalAgent framework">
  <figcaption>
    Overview: the MLLM acts as a spatial controller that localizes suspicious regions and delegates them to a
    Local Evidence Verifier (LEV) toolkit for fine-grained appearance and geometric matching.
  </figcaption>
</figure>

## What it does

- **Global first, local when needed.** The MLLM reasons globally and either answers directly or delegates
  suspicious regions to specialists.
- **LEV toolkit.** Local Appearance Consistency (LAC) estimates appearance similarity under illumination and colour
  changes; Local Geometric Correspondence (LGC) estimates spatial correspondence under viewpoint changes.
- **Learned tool use.** An auxiliary-capped reinforcement fine-tuning strategy lets answer correctness dominate
  tool-use and format signals, so the policy learns *when* verification is necessary.

## Results

- +4.9% mean accuracy over the strongest CoT-RFT baseline.
- Verifier invoked on only 12.13% of samples.
- General multimodal capabilities of the base MLLM preserved.
