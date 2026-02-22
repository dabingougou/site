---
title: "Improving Chinese-English Translation of Conversational Text"
summary: "A two-stage pipeline that combines speaker-aware pronoun recovery with mBART fine-tuning to improve Chinese-to-English translation on noisy chat data."
tools: ["Python", "PyTorch", "Transformers", "mBART", "BLEU", "BLEURT", "COMET"]
date: 2026-02-21
links:
  repo: "https://github.com/dabingougou/machine_translation_w266"
  demo: "https://github.com/dabingougou/machine_translation_w266/blob/main/final_project_submission/Chang_w266_project_submission.ipynb"
  report: "https://github.com/dabingougou/machine_translation_w266/blob/main/final_project_submission/Huibin_Chang_w266_final_report.pdf"
featured: true
---

## Why this matters
In conversational Chinese, pronouns are often dropped because context is shared. In English, those pronouns usually need to be explicit. That mismatch creates translation errors and ambiguity, especially in short and noisy SMS style text.

## Data
I used the BOLT Chinese-English SMS and Chat parallel corpus. It contains informal turn by turn conversations with speaker tags and human English references.

In experiments, I worked with roughly 20,000 sentence pairs for training and validation due to compute constraints, and used additional holdout examples for evaluation.

## What I did
I built and tested a two-stage pipeline.

1) Speaker-aware pronoun recovery on Chinese input.
- Added likely missing pronouns using simple but practical rules informed by English references.
- In one training split, this added 我 to about 6.7% of examples and 你 to about 2.8%.

2) Translation modeling and fine-tuning.
- Used `facebook/mbart-large-50-many-to-many-mmt` as baseline and fine-tuned model.
- Compared baseline translation against fine-tuned translation after recovery.

I evaluated with BLEU, BLEURT, and COMET, and also did qualitative error analysis.

## Results in plain language
The fine-tuned pipeline improved translation quality on unseen SMS holdout data and did so without obvious catastrophic forgetting on out-of-domain checks.

A practical takeaway is that even lightweight pronoun recovery can provide useful signal when paired with targeted fine-tuning.

## Links
- Repo: [machine_translation_w266](https://github.com/dabingougou/machine_translation_w266)
- Notebook: [Chang_w266_project_submission.ipynb](https://github.com/dabingougou/machine_translation_w266/blob/main/final_project_submission/Chang_w266_project_submission.ipynb)
- PDF report: [Huibin_Chang_w266_final_report.pdf](https://github.com/dabingougou/machine_translation_w266/blob/main/final_project_submission/Huibin_Chang_w266_final_report.pdf)
