---
title: "The real numbers"
description: "Order, intervals and absolute value; upper bounds, supremum and infimum; and the completeness axiom: the definitions behind Tool 05."
date: 2026-10-12
order: 5
---

This note collects the definitions and conventions used in [Tool 05](../../real_numbers.html). It builds on [note 03](../03-partial-orders/), which defines the maximum and minimum of a set.

## Number systems

We write

$$
\mathbb{N} = \{1, 2, 3, \ldots\}, \qquad \mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}, \qquad \mathbb{Q} = \left\{ \tfrac{p}{q} : p, q \in \mathbb{Z},\ q \ne 0 \right\},
$$

and $\mathbb{R}$ for the real numbers. In this course, $0 \notin \mathbb{N}$. Some texts include $0$; when reading other sources, check their convention.

## Order

The real numbers carry the usual order $<$, and $a \le b$ means $a < b$ or $a = b$. We use the following rules, which are part of the definition of $\mathbb{R}$ as an *ordered field*. For all real numbers $a$, $b$ and $c$:

1. exactly one of $a < b$, $a = b$ and $b < a$ holds;
2. if $a < b$ and $b < c$, then $a < c$;
3. if $a < b$, then $a + c < b + c$;
4. if $a < b$ and $c > 0$, then $ac < bc$.

Every other rule for manipulating inequalities follows from these four, so each step in a calculation can be justified by them. Rule 4 requires $c > 0$. Several exercises in [Tool 05](../../real_numbers.html) turn on what goes wrong when that condition is forgotten.

## Intervals

Let $a$ and $b$ be real numbers with $a \le b$. The *bounded* intervals with endpoints $a$ and $b$ are

| Interval | Set | Endpoints included |
|:--|:--|:--|
| $[a, b]$ | $\{x \in \mathbb{R} : a \le x \le b\}$ | both |
| $(a, b)$ | $\{x \in \mathbb{R} : a < x < b\}$ | neither |
| $[a, b)$ | $\{x \in \mathbb{R} : a \le x < b\}$ | only $a$ |
| $(a, b]$ | $\{x \in \mathbb{R} : a < x \le b\}$ | only $b$ |

A square bracket marks an endpoint that belongs to the interval, and a round bracket one that does not. The interval $[a, b]$ is called *closed*, and $(a, b)$ *open*. When $a = b$, the interval $[a, a]$ is $\{a\}$, and the other three are empty.

The *unbounded* intervals are

| Interval | Set |
|:--|:--|
| $(a, \infty)$ | $\{x \in \mathbb{R} : x > a\}$ |
| $[a, \infty)$ | $\{x \in \mathbb{R} : x \ge a\}$ |
| $(-\infty, b)$ | $\{x \in \mathbb{R} : x < b\}$ |
| $(-\infty, b]$ | $\{x \in \mathbb{R} : x \le b\}$ |
| $(-\infty, \infty)$ | $\mathbb{R}$ |

The symbols $\infty$ and $-\infty$ are not real numbers. They record that the interval has no end on that side, so the bracket next to them is always round: $[a, \infty)$ is correct, and $[a, \infty]$ is not.

The solution set of an inequality is often a *union* of intervals, written with $\cup$, such as $(-\infty, -1] \cup (2, \infty)$. The empty set $\varnothing$ is the solution set of an inequality with no solutions.

## Absolute value

The *absolute value* of a real number $x$ is

$$
\lvert x \rvert = \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}
$$

So $\lvert x \rvert \ge 0$ for every $x$, and $\lvert x \rvert = 0$ only when $x = 0$. For real numbers $x$ and $y$, the number $\lvert x - y \rvert$ is the *distance* between $x$ and $y$ on the number line. In particular, $\lvert x \rvert$ is the distance from $x$ to $0$.

To work with an expression containing absolute values, split into cases according to the sign of each quantity inside the bars, and apply the definition in each case.

## Bounds

Let $A$ be a subset of $\mathbb{R}$.

- A real number $u$ is an *upper bound* of $A$ if $a \le u$ for every $a \in A$. The set $A$ is *bounded above* if it has an upper bound.
- A real number $l$ is a *lower bound* of $A$ if $l \le a$ for every $a \in A$. The set $A$ is *bounded below* if it has a lower bound.
- $A$ is *bounded* if it is bounded above and bounded below.

An upper bound need not belong to $A$, and a set that has one upper bound has many: every number larger than an upper bound is also an upper bound.

## Supremum and infimum

A real number $s$ is the *supremum*, or *least upper bound*, of $A$ if

1. $s$ is an upper bound of $A$, and
2. $s \le u$ for every upper bound $u$ of $A$.

We then write $s = \sup A$. In the language of note 03, $\sup A$ is the minimum of the set of upper bounds of $A$, and so a set has at most one supremum.

Similarly, the *infimum*, or *greatest lower bound*, $\inf A$ is the maximum of the set of lower bounds of $A$, when that maximum exists.

The supremum and infimum of $A$ need not belong to $A$. Compare the maximum and minimum of note 03, which must belong to the set.

**When $A$ is not bounded above.** Then $A$ has no upper bounds at all, so it has no supremum in $\mathbb{R}$, and in Tool 05 the answer is “does not exist”. Some texts write $\sup A = +\infty$ in this case. That is a convention, not a statement about a real number.

**An equivalent test.** Condition 2 can be replaced by a condition that is often easier to check. If $s$ is an upper bound of $A$, then

$$
s = \sup A \quad\text{if and only if}\quad \text{for every } \varepsilon > 0 \text{ there is } a \in A \text{ with } a > s - \varepsilon .
$$

Here is why. If $s = \sup A$ and $\varepsilon > 0$, then $s - \varepsilon < s$, so $s - \varepsilon$ is not an upper bound, and some $a \in A$ exceeds it. Conversely, suppose that the condition holds, and let $u < s$. Taking $\varepsilon = s - u$ gives some $a \in A$ with $a > u$, so $u$ is not an upper bound. Hence every upper bound is at least $s$.

The condition is a statement about *every* $\varepsilon > 0$. A single $\varepsilon$ with no suitable $a$ shows that it fails, but checking finitely many values of $\varepsilon$ can never show that it holds. That needs a rule giving a suitable $a$ for each $\varepsilon$.

## Completeness

The four order rules above hold in $\mathbb{Q}$ as well as in $\mathbb{R}$. What distinguishes $\mathbb{R}$ is one further axiom.

**The completeness axiom.** Every nonempty subset of $\mathbb{R}$ that is bounded above has a supremum.

The axiom asserts existence only. It does not say how to find the supremum, and it says nothing about sets that are empty or not bounded above.

The same question can be asked of $\mathbb{Q}$: does every nonempty set of rational numbers that is bounded above have a least upper bound *that is itself rational*? Answering it, and tracing which familiar facts about numbers depend on completeness, is the purpose of the last exercise set in [Tool 05](../../real_numbers.html).
