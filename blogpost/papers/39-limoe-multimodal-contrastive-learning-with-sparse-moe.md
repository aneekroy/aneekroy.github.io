# LIMoE: Multimodal Contrastive Learning with Sparse MoE

**Authors:** Basil Mustafa et al.  
**Venue:** NeurIPS 2022  

## Abstract

First large-scale multimodal Transformer using sparse Mixture-of-Experts. Activates only subset of expert sub-networks per input. Achieves 84.1% zero-shot ImageNet accuracy at significantly lower per-token compute.

## Metrics

- **Accuracy:** 84.1%
- **FLOPs:** 2.0G
- **Parameters:** 5.0B

## Tags

`MoE`, `Sparse`, `Contrastive`

## Methodology

First large-scale multimodal Transformer using sparse Mixture-of-Experts. Activates only subset of expert sub-networks per input. Achieves 84.1% zero-shot ImageNet accuracy at significantly lower per-token compute.

Uses Mixture of Experts architecture where only a subset of expert networks are activated per input, achieving sparse computation while maintaining model capacity.

## Future Directions

• Investigating expert specialization patterns for different visual domains.
• Optimizing load balancing across experts for improved training stability.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://arxiv.org/abs/2206.02770](https://arxiv.org/abs/2206.02770)

---

 
