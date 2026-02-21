---
title: "Chinese-to-English Translation with Pronoun Recovery (mBART)"
summary: "A practical NLP project focused on recovering dropped pronouns in Chinese before translation to improve English fluency and meaning preservation."
tools: ["Python", "PyTorch", "Transformers", "mBART", "Hugging Face"]
date: 2026-02-21
featured: true
---

## Problem
Chinese frequently drops pronouns that must be explicit in English. This causes translation systems to produce outputs that are fluent but incomplete or ambiguous.

## What I built
I built a fine-tuning pipeline around mBART to improve Chinese-to-English translation quality with pronoun recovery in mind.

## Approach
- Data preparation and text normalization for training/evaluation splits
- Fine-tuning and iteration on model configuration
- Error analysis focused on pronoun omission/recovery behavior
- Evaluation framework to compare baseline vs tuned model behavior

## Result (first pass)
The tuned model showed better handling of pronoun-related translation errors in targeted examples.

## What I learned
Error analysis was as important as model tuning; it guided where the model actually improved and where it still failed.

## Next improvements
- Add quantitative metrics snapshot
- Add example pairs (before/after)
- Add a compact architecture/training diagram
