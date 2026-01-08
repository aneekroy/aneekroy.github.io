# Multimodal Few-Shot Learning with Frozen Language Models

**Authors:** Maria Tsimpoukelli et al.  
**Venue:** NeurIPS 2021  

## Abstract

Introduced the 'Frozen' approach: keeping the LLM frozen and only training a vision encoder to map images into the LLM's prompt space. A pioneer in parameter-efficient V+L learning.

## Metrics

- **Accuracy:** 55.0%
- **FLOPs:** 3.5G
- **Parameters:** 7.0B

## Tags

`Frozen LLM`

## Methodology

Introduced the 'Frozen' approach: keeping the LLM frozen and only training a vision encoder to map images into the LLM's prompt space. A pioneer in parameter-efficient V+L learning.

This approach keeps the Large Language Model (LLM) weights frozen during training, only optimizing a lightweight bridging module to align visual features with the LLM's embedding space.

## Future Directions

• Scaling the approach to larger model sizes and more diverse datasets.
• Investigating cross-task transfer learning capabilities.
• Exploring combinations with other efficiency techniques.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [https://proceedings.neurips.cc/paper/2021/hash/01b7575c38dac42f3cfb7d500438b875-Abstract.html](https://proceedings.neurips.cc/paper/2021/hash/01b7575c38dac42f3cfb7d500438b875-Abstract.html)

---

