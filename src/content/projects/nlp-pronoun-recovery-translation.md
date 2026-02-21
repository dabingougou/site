---
title: "Chinese-to-English Translation with Pronoun Recovery (mBART)"
summary: "Fine-tuned mBART to recover dropped pronouns in Chinese before English translation, reducing meaning loss in practical examples."
tools: ["Python", "PyTorch", "Transformers", "mBART", "Hugging Face"]
date: 2026-02-21
links:
  repo: "https://github.com/dabingougou/machine_translation_w266"
  demo: "https://github.com/dabingougou/machine_translation_w266/blob/main/final_project_submission/Chang_w266_project_submission.ipynb"
featured: true
---

## Problem
Chinese often omits subject/object pronouns when context is obvious. English usually cannot. Standard MT models can produce fluent outputs that quietly drop who did what.

## What I built
I built a fine-tuning workflow around mBART for Chinese→English translation with explicit focus on pronoun recovery. The project includes data preparation, training, evaluation, and targeted error analysis.

## Approach
- Curated and normalized training/evaluation text with emphasis on pronoun-sensitive examples.
- Fine-tuned mBART and compared outputs against a baseline translation setup.
- Performed qualitative error analysis to classify omission, hallucination, and incorrect pronoun recovery cases.

## Result (first pass)
On targeted examples, the tuned model produced noticeably better pronoun realization and clearer sentence meaning. Biggest gains were in conversational and context-dependent sentences where dropped pronouns are common.

## Artifacts
- Project repo: [machine_translation_w266](https://github.com/dabingougou/machine_translation_w266)
- Final report (PDF): [Huibin_Chang_w266_final_report.pdf](https://github.com/dabingougou/machine_translation_w266/blob/main/final_project_submission/Huibin_Chang_w266_final_report.pdf)
- Submission notebook: [Chang_w266_project_submission.ipynb](https://github.com/dabingougou/machine_translation_w266/blob/main/final_project_submission/Chang_w266_project_submission.ipynb)

## What I learned
Error analysis mattered as much as model tuning. It made it obvious where quality improved and where the model still needed better context handling.

## Next improvements
- Add compact metric table (BLEU/COMET + pronoun-specific checks)
- Add 3–5 before/after translation examples
- Add short architecture/training diagram
