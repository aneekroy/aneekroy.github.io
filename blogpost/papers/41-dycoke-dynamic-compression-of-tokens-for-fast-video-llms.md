# DyCoke: Dynamic Compression of Tokens for Fast Video LLMs

**Authors:** Keda Tao et al.  
**Venue:** CVPR 2025  
**Paper ID:** 41

## Abstract

Two-stage token compression for video-LLMs. Merges redundant tokens across frames (temporal), then prunes from KV cache (spatial). Retains ~15 tokens/frame, 1.5x speedup without fine-tuning.

## Metrics

- **Accuracy:** 84.0%
- **FLOPs:** 1.0G
- **Parameters:** 7.0B

## Tags

`Video`, `KV-Cache`, `Temporal`

## Methodology

Two-stage token compression for video-LLMs. Merges redundant tokens across frames (temporal), then prunes from KV cache (spatial). Retains ~15 tokens/frame, 1.5x speedup without fine-tuning.

## Future Directions

• Scaling to longer video sequences with memory-efficient attention.
• Temporal modeling improvements for better video understanding.
• Benchmarking on emerging multimodal tasks and real-world applications.

## Links

- **Paper:** [http://openaccess.thecvf.com/content/CVPR2025/papers/Tao_DyCoke_Dynamic_Compression_of_Tokens_for_Fast_Video_Large_Language_CVPR_2025_paper.pdf](http://openaccess.thecvf.com/content/CVPR2025/papers/Tao_DyCoke_Dynamic_Compression_of_Tokens_for_Fast_Video_Large_Language_CVPR_2025_paper.pdf)

---

 
