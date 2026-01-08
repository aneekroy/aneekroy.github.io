# MoE-LLaVA: Mixture of Experts for Large VLMs

**Authors:** Lin et al.  
**Venue:** arXiv 2024  
**Paper ID:** 35

## Abstract

Sparse MoE architecture for VLMs. Only 3B active params from 7B total. Achieves comparable performance to dense 7B models with 40% less compute.

## Metrics

- **Accuracy:** 83.5%
- **FLOPs:** 1.6G
- **Parameters:** 3.0B

## Tags

`MoE`, `Sparse`

## Methodology

Sparse MoE architecture for VLMs. Only 3B active params from 7B total. Achieves comparable performance to dense 7B models with 40% less compute.

Uses Mixture of Experts architecture where only a subset of expert networks are activated per input, achieving sparse computation while maintaining model capacity.

## Future Directions

• Investigating expert specialization patterns for different visual domains.
• Optimizing load balancing across experts for improved training stability.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://arxiv.org/abs/2401.15947](https://arxiv.org/abs/2401.15947)

---

 
