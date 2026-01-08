# BLIP-2: Bootstrapping Language-Image Pre-training

**Authors:** Junnan Li et al.  
**Venue:** ICML 2023  
**Paper ID:** 6

## Abstract

Uses a Q-Former to bridge frozen image encoders and frozen LLMs. Drastically cuts trainable parameters (54x fewer vs Flamingo).

## Metrics

- **Accuracy:** 84.5%
- **FLOPs:** 3.0G
- **Parameters:** 188M

## Tags

`Q-Former`

## Methodology

Uses a Q-Former to bridge frozen image encoders and frozen LLMs. Drastically cuts trainable parameters (54x fewer vs Flamingo).

Utilizes a Querying Transformer (Q-Former) that learns a set of query embeddings to extract visual features relevant to the language model through cross-attention mechanisms.

## Future Directions

• Scaling the approach to larger model sizes and more diverse datasets.
• Investigating cross-task transfer learning capabilities.
• Exploring combinations with other efficiency techniques.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://proceedings.mlr.press/v202/li23q.html](https://proceedings.mlr.press/v202/li23q.html)

---

 
