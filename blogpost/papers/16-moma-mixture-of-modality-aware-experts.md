# MoMa: Mixture of Modality-Aware Experts

**Authors:** Xi Victoria Lin et al.  
**Venue:** arXiv 2024  

## Abstract

Modality-aware MoE architecture for efficient early-fusion pre-training. Achieves 3.7x overall FLOPs savings vs dense baseline through modality-specific routing.

## Metrics

- **Accuracy:** 82.5%
- **FLOPs:** 1.0G
- **Parameters:** 200M

## Tags

`MoE`, `Pre-training`

## Methodology

Modality-aware MoE architecture for efficient early-fusion pre-training. Achieves 3.7x overall FLOPs savings vs dense baseline through modality-specific routing.

Uses Mixture of Experts architecture where only a subset of expert networks are activated per input, achieving sparse computation while maintaining model capacity.

## Future Directions

• Investigating expert specialization patterns for different visual domains.
• Optimizing load balancing across experts for improved training stability.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://arxiv.org/pdf/2407.21770](https://arxiv.org/pdf/2407.21770)

---

 
