# VisionThink: Smart VLM via RL

**Authors:** Senqiao Yang et al.  
**Venue:** NeurIPS 2025  
**Paper ID:** 9

## Abstract

RL-based dynamic visual token strategy. Uses low-res images by default and requests high-res only when needed by the prompt.

## Metrics

- **Accuracy:** 87.0%
- **FLOPs:** 1.5G
- **Parameters:** 300M

## Tags

`RL`, `Dynamic`

## Methodology

RL-based dynamic visual token strategy. Uses low-res images by default and requests high-res only when needed by the prompt.

Employs Reinforcement Learning to train a policy that decides which visual regions or tokens to process, optimizing for both accuracy and computational efficiency. Adapts computation at runtime based on input complexity, allocating more resources to difficult samples and less to simpler ones.

## Future Directions

• Extending dynamic computation to multi-modal reasoning chains.
• Developing more efficient policy networks for token selection.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://arxiv.org/abs/2507.13348](https://arxiv.org/abs/2507.13348)

---

*Generated from blogpost.html survey data*
