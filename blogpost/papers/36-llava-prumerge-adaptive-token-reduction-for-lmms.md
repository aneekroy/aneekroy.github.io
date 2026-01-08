# LLaVA-PruMerge: Adaptive Token Reduction for LMMs

**Authors:** Yuzhang Shang et al.  
**Venue:** ICCV 2025  
**Paper ID:** 36

## Abstract

Dynamically determines token count per input. Uses [CLS]-token attention to identify important tokens, then clusters and merges similar ones. Reduces to ~40 tokens/image with ~10x lower FLOPs.

## Metrics

- **Accuracy:** 83.0%
- **FLOPs:** 1.2G
- **Parameters:** 7.0B

## Tags

`Prune+Merge`, `Adaptive`, `CLS-guided`

## Methodology

Dynamically determines token count per input. Uses [CLS]-token attention to identify important tokens, then clusters and merges similar ones. Reduces to ~40 tokens/image with ~10x lower FLOPs.

## Future Directions

• Scaling the approach to larger model sizes and more diverse datasets.
• Investigating cross-task transfer learning capabilities.
• Exploring combinations with other efficiency techniques.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://arxiv.org/abs/2403.15388](https://arxiv.org/abs/2403.15388)

---

*Generated from blogpost.html survey data*
