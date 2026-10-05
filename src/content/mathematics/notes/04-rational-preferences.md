---
title: "Rational preferences"
description: "Preference relations and their pictures, strict preference, indifference and incomparability, choice sets, and utility representations: the definitions behind Tool 04."
date: 2026-10-05
order: 4
---

This note collects the definitions used in [Tool 04](../../rational_preferences.html). It builds on [note 02](../02-sets-relations-functions/), where relations and their properties are defined, and on [note 03](../03-partial-orders/).

## Preference relations

A consumer chooses among the elements of a set $X$ of *bundles*. A *preference relation* is a relation $\succsim$ on $X$, and $x \succsim y$ reads “$x$ is at least as good as $y$”. The preference relation is called *rational* when it is

- *complete*: for all $x, y \in X$, $x \succsim y$ or $y \succsim x$; and
- *transitive*: for all $x, y, z \in X$, if $x \succsim y$ and $y \succsim z$, then $x \succsim z$.

From $\succsim$ we define two further relations:

| Relation | Definition | Reads |
|:--|:--|:--|
| strict preference $x \succ y$ | $x \succsim y$ and not $y \succsim x$ | $x$ is better than $y$ |
| indifference $x \sim y$ | $x \succsim y$ and $y \succsim x$ | $x$ and $y$ are equally good |

Two bundles are *incomparable* when neither $x \succsim y$ nor $y \succsim x$ holds. Incomparability is not indifference: indifference means that both comparisons hold, and incomparability means that neither does.

If $\sim$ is an equivalence relation, its equivalence classes are called *indifference classes*.

## Pictures of a preference relation

A preference relation on a finite set can be given in either of the forms used in Tool 03.

- **As a directed graph.** There is an arrow from $x$ to $y$ when $x \succsim y$, and a loop at $x$ when $x \succsim x$. Arrows in both directions between $x$ and $y$ mean $x \sim y$.
- **As a matrix.** The entry in row $x$, column $y$ is 1 when $x \succsim y$, and 0 otherwise.

## Choice sets

A *menu* is a nonempty subset $B \subseteq X$ of bundles that are available. The *choice set* of $B$ consists of the bundles in $B$ that are at least as good as everything in $B$:

$$
C(B) = \{x \in B : x \succsim y \text{ for every } y \in B\}.
$$

The choice set may contain several bundles, or none at all.

## Utility representations

A function $u : X \to \mathbb{R}$ *represents* $\succsim$ when, for all $x, y \in X$,

$$
x \succsim y \quad\text{if and only if}\quad u(x) \ge u(y).
$$

A utility function carries only order information. If $u$ represents $\succsim$ and $f : \mathbb{R} \to \mathbb{R}$ is strictly increasing, then $f \circ u$ represents $\succsim$ as well, since $f(u(x)) \ge f(u(y))$ exactly when $u(x) \ge u(y)$. So the values $u = 4, 1, 3$ and $u = 100, 0, 7$ represent the same preferences on three bundles.

**Lexicographic preferences.** On bundles $x = (x_1, x_2)$ and $y = (y_1, y_2)$, the *lexicographic* preference compares the first coordinates and uses the second only to break a tie:

$$
x \succsim y \quad\text{when}\quad x_1 > y_1, \;\text{ or }\; x_1 = y_1 \text{ and } x_2 \ge y_2 .
$$

The name comes from the way a dictionary orders words: by the first letter, then by the second.

Test these definitions in [Tool 04](../../rational_preferences.html). Some of its exercises ask for a utility function that does not exist; showing why is part of the exercise.
