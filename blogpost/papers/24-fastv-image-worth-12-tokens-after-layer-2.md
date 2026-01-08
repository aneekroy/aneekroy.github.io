# FastV: Image Worth 1/2 Tokens After Layer 2

**Authors:** Liang Chen et al.  
**Venue:** ECCV 2024  
**Paper ID:** 24

## Abstract

Plug-and-play inference acceleration. Prunes 50% visual tokens after layer 2 based on attention scores. 45% FLOPs reduction without performance loss.

## Metrics

- **Accuracy:** 85.0%
- **FLOPs:** 1.8G
- **Parameters:** 13.0B

## Tags

`Token Pruning`, `Plug-and-Play`

## Methodology

Plug-and-play inference acceleration. Prunes 50% visual tokens after layer 2 based on attention scores. 45% FLOPs reduction without performance loss.

Implements selective removal of less informative visual tokens based on attention scores or learned importance weights, reducing computational overhead during inference.

## Future Directions

• Exploring adaptive token budgets that vary based on task difficulty and input complexity.
• Investigating the combination of pruning and merging strategies for maximum efficiency.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://arxiv.org/abs/2403.06764](https://arxiv.org/abs/2403.06764)

---

*Generated from blogpost.html survey data*
