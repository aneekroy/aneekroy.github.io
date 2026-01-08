# Kimi-VL: MoE Vision-Language Reasoning Model

**Authors:** Moonshot AI  
**Venue:** arXiv 2025  
**Paper ID:** 38

## Abstract

16B total params, 2.8B active. Long chain-of-thought fine-tuned with RL alignment. Uses MoonViT (SigLIP-so-400M) as vision encoder.

## Metrics

- **Accuracy:** 86.0%
- **FLOPs:** 1.8G
- **Parameters:** 2.8B

## Tags

`MoE`, `Reasoning`, `RL`

## Methodology

16B total params, 2.8B active. Long chain-of-thought fine-tuned with RL alignment. Uses MoonViT (SigLIP-so-400M) as vision encoder.

Uses Mixture of Experts architecture where only a subset of expert networks are activated per input, achieving sparse computation while maintaining model capacity. Employs Reinforcement Learning to train a policy that decides which visual regions or tokens to process, optimizing for both accuracy and computational efficiency.

## Future Directions

• Extending dynamic computation to multi-modal reasoning chains.
• Developing more efficient policy networks for token selection.
• Investigating expert specialization patterns for different visual domains.
• Optimizing load balancing across experts for improved training stability.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://arxiv.org/abs/2504.07491](https://arxiv.org/abs/2504.07491)

---

 
