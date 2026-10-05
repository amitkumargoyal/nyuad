---
title: "Partial orders"
description: "Hasse diagrams and order matrices, maximum, minimum, maximal and minimal elements, relations on intervals drawn in the plane, and Pareto dominance: the definitions behind Tool 03."
date: 2026-10-05
order: 3
---

This note collects the definitions used in [Tool 03](../../partial_orders.html). It builds on [note 02](../02-sets-relations-functions/), which defines relations, their properties, and partial and total orders.

## Partial orders and their pictures

A *partial order* on a set $P$ is a relation $\le$ that is reflexive, antisymmetric and transitive. We write $x < y$ for the *strict* order: $x \le y$ and $x \ne y$.

Two elements $x$ and $y$ are *comparable* if $x \le y$ or $y \le x$, and *incomparable* otherwise. A partial order is *total* when every two elements are comparable. A *chain* is a subset in which every two elements are comparable, and an *antichain* is a subset in which no two distinct elements are comparable.

**Covers.** We say that $y$ *covers* $x$ if $x < y$ and no element lies strictly between them: there is no $z$ with $x < z < y$.

**Hasse diagrams.** A finite partial order is drawn by placing each element above the elements it covers and joining every covering pair by a line. Loops are left out, since every element is related to itself, and so are the pairs implied by transitivity. In a finite partial order, $x \le y$ holds exactly when there is an upward path of lines from $x$ to $y$, so the diagram determines the order.

**Matrices.** A relation on a finite set can also be given by a table of 0s and 1s: the entry in row $x$, column $y$ is 1 when $x \le y$, and 0 otherwise.

## Special elements

Let $B$ be a nonempty subset of a partially ordered set $(P, \le)$, with the order inherited from $P$. An element $m \in B$ is

| Name | Definition | In words |
|:--|:--|:--|
| the *maximum* of $B$ | $\forall y \in B : y \le m$ | $m$ lies above every element of $B$ |
| the *minimum* of $B$ | $\forall y \in B : m \le y$ | $m$ lies below every element of $B$ |
| a *maximal* element of $B$ | $\neg\, \exists y \in B : m < y$ | nothing in $B$ lies strictly above $m$ |
| a *minimal* element of $B$ | $\neg\, \exists y \in B : y < m$ | nothing in $B$ lies strictly below $m$ |

The maximum and minimum of $B$, when they exist, must belong to $B$.

A set has at most one maximum. Suppose that $m$ and $m'$ are both maximum elements of $B$. Since $m' \in B$ and $m$ is a maximum of $B$, we have $m' \le m$. Since $m \in B$ and $m'$ is a maximum of $B$, we have $m \le m'$. By antisymmetry, $m = m'$. That is why we speak of *the* maximum. The same holds for the minimum. A set may have many maximal elements, or none. How the maximum and the maximal elements are related is for you to explore in the tool.

## Relations on intervals of the real line

We write $[a, b]$ for the interval that contains both endpoints, $(a, b)$ for the one that contains neither, and $[a, b)$ and $(a, b]$ for the intervals that contain only the left or only the right endpoint.

A relation $R$ on an interval $A$ is a subset of $A \times A$, so it can be drawn in the plane as its *graph*

$$
\{(x, y) \in A \times A : x \mathrel{R} y\},
$$

with $x$ on the horizontal axis and $y$ on the vertical axis. Several properties can then be read from the picture.

| Property | What it means for the graph |
|:--|:--|
| reflexive | the graph contains the whole diagonal $\{(x, x) : x \in A\}$ |
| symmetric | the graph is unchanged by reflection in the diagonal, which sends $(x, y)$ to $(y, x)$ |
| antisymmetric | the graph and its reflection meet only on the diagonal |
| complete | the graph and its reflection together cover the whole square $A \times A$ |

Transitivity has no equally simple picture, and must be checked from the definition.

**Why $R$ and not $\le$.** We write $x \mathrel{R} y$ rather than $x \le y$ for two reasons. Some of these relations are not orders at all, and whether a relation is an order is often the question being asked. And the symbol $\le$ is already in use: a condition such as $y \ge x + 1$ refers to the usual order of $\mathbb{R}$, which is a different relation. When $R$ is a partial order, read $x \mathrel{R} y$ as “$x$ lies below $y$”, or equivalently “$y$ lies above $x$”. The definitions of the special elements then apply with $R$ in place of $\le$. For instance, $m$ is maximal when there is no $y \ne m$ with $m \mathrel{R} y$, and $m$ is the maximum when $y \mathrel{R} m$ for every $y$.

When a relation is given in set-builder form, such as $R = \{(x, y) \in [0, 3]^2 : x = y \text{ or } y \ge x + 1\}$, each question about it is a question about which pairs satisfy the condition. Endpoints matter: whether a boundary point belongs to a set of special elements is decided by the definitions, not by the picture.

## Pareto dominance

For points $x = (x_1, \ldots, x_n)$ and $y = (y_1, \ldots, y_n)$ of $\mathbb{R}^n$, the *componentwise order* is

$$
x \ge y \quad\text{when}\quad x_i \ge y_i \text{ for every } i = 1, \ldots, n.
$$

It is a partial order on $\mathbb{R}^n$. For $n \ge 2$ it is not total: neither $(1, 2) \ge (2, 1)$ nor $(2, 1) \ge (1, 2)$.

- $x$ *Pareto dominates* $y$ when $x \ge y$ and $x \ne y$, that is, $x$ is at least as large in every coordinate and strictly larger in at least one. This is the strict part of the componentwise order.
- A point $x$ of a set $S \subseteq \mathbb{R}^n$ is *Pareto efficient* in $S$ when no point of $S$ Pareto dominates it.

So the Pareto-efficient points of $S$ are exactly the maximal elements of $S$ under the componentwise order. The set of Pareto-efficient points is often called the *Pareto frontier*.

In economics, the coordinates are usually the utility levels of $n$ people. A point $(u_1, \ldots, u_n)$ describes how well off each person is under some allocation, and an allocation is Pareto efficient when no other feasible allocation makes someone better off without making anyone worse off.

Test these definitions in [Tool 03](../../partial_orders.html). Its exercises compare maximal elements with the maximum, in finite orders, on intervals and in the plane, and some of them ask whether an order with given properties can exist at all.
