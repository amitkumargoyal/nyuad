---
title: "Sets, relations, and functions"
description: "Set operations and Venn regions, products and power sets, the properties of relations, and images, preimages, injections and surjections: the definitions behind Tool 02."
date: 2026-09-25
order: 2
---

This note collects the definitions used in [Tool 02](../../sets_relations_functions.html). It relies on the logic of [the previous note](../01-logic/): each definition below is a statement built from connectives and quantifiers.

## Sets

We write $x \in A$ when $x$ is an element of the set $A$, and $x \notin A$ otherwise.

- $A \subseteq B$ (*$A$ is a subset of $B$*) means $\forall x\,(x \in A \to x \in B)$.
- $A = B$ means that $A$ and $B$ have the same elements, that is, $A \subseteq B$ and $B \subseteq A$.
- The *empty set* $\varnothing$ has no elements. It is a subset of every set, vacuously.
- When all sets under discussion lie inside a fixed *universe* $U$, the *complement* of $A$ is $A^{c} = \{x \in U : x \notin A\}$.

The set operations are defined by connectives applied to membership:

| Set | Its elements $x$ satisfy |
|:--|:--|
| $A \cup B$ (union) | $x \in A \lor x \in B$ |
| $A \cap B$ (intersection) | $x \in A \land x \in B$ |
| $A \setminus B$ (difference) | $x \in A \land x \notin B$ |
| $A \mathbin{\triangle} B$ (symmetric difference) | $x$ lies in exactly one of $A$ and $B$ |
| $A^{c}$ (complement) | $x \in U \land x \notin A$ |

Equivalently, $A \mathbin{\triangle} B = (A \setminus B) \cup (B \setminus A)$.

Because each operation is a connective in disguise, set identities mirror logical equivalences. For example, De Morgan's laws become $(A \cup B)^{c} = A^{c} \cap B^{c}$ and $(A \cap B)^{c} = A^{c} \cup B^{c}$.

**Venn regions.** With three sets $A$, $B$, $C$ inside $U$, every element of $U$ lies in exactly one of $2^3 = 8$ regions, according to whether or not it is in $A$, in $B$ and in $C$. Whether an element belongs to a set built from $A$, $B$ and $C$ depends only on its region. So two such expressions are equal for every choice of $A$, $B$, $C$ exactly when they shade the same regions. The regions play the role of the rows of a truth table. If the two sides differ on a region, any element placed in that region is a counterexample.

## Ordered pairs and Cartesian products

An *ordered pair* $(a, b)$ records two objects in order: $(a, b) = (c, d)$ exactly when $a = c$ and $b = d$. In particular, $(a, b) \ne (b, a)$ when $a \ne b$.

The *Cartesian product* of $A$ and $B$ is

$$
A \times B = \{(a, b) : a \in A,\ b \in B\}.
$$

For finite sets, $\lvert A \times B \rvert = \lvert A \rvert \cdot \lvert B \rvert$. In general $A \times B \ne B \times A$.

## Power sets

The *power set* of $A$ is the set of all subsets of $A$:

$$
P(A) = \{X : X \subseteq A\}.
$$

Its elements are sets. Both $\varnothing$ and $A$ belong to $P(A)$. For finite $A$, $\lvert P(A) \rvert = 2^{\lvert A \rvert}$, since a subset is fixed by deciding, element by element, whether to include it.

Keep two distinctions in view. First, the element $a$ and the set $\{a\}$ are different objects, linked by membership and inclusion: $a \in A$ exactly when $\{a\} \subseteq A$, that is, when $\{a\} \in P(A)$. Second, $\varnothing \subseteq A$ always holds, while $\varnothing \in A$ usually does not.

## Relations

A *relation* on a set $S$ is a subset $R \subseteq S \times S$. We write $(x, y) \in R$, or $x \mathrel{R} y$. A finite relation can be drawn as a directed graph: an arrow from $x$ to $y$ when $(x, y) \in R$, and a loop at $x$ when $(x, x) \in R$.

| Property | Definition | In the graph |
|:--|:--|:--|
| reflexive | $\forall x : (x, x) \in R$ | every node has a loop |
| symmetric | $\forall x\, \forall y : (x, y) \in R \to (y, x) \in R$ | every arrow has a reverse arrow |
| antisymmetric | $\forall x\, \forall y : (x, y) \in R \land (y, x) \in R \to x = y$ | no two distinct nodes are joined in both directions |
| transitive | $\forall x\, \forall y\, \forall z : (x, y) \in R \land (y, z) \in R \to (x, z) \in R$ | every two-step path has a direct arrow |
| complete | $\forall x\, \forall y : (x, y) \in R \lor (y, x) \in R$ | every pair of nodes, and every node with itself, is joined in at least one direction |

Some texts call a complete relation *total* or *connected*; *complete* is the term used in economics.

Two remarks help with the exercises.

- **Symmetric and antisymmetric are not opposites.** A relation can have both properties or neither.
- **Symmetry, antisymmetry and transitivity all have the form $\forall \ldots\ (\text{hypothesis} \to \text{conclusion})$.** Such a statement can hold vacuously: if no choice of the variables satisfies the hypothesis, there is nothing to check. The empty relation, for example, is symmetric, antisymmetric and transitive. This does not make the properties automatic: each one fails as soon as a single choice of the variables satisfies its hypothesis but not its conclusion.

**Named classes of relations.**

- An *equivalence relation* is reflexive, symmetric and transitive. The *equivalence class* of $x$ is $[x] = \{y \in S : (x, y) \in R\}$. The distinct classes *partition* $S$: every element of $S$ lies in exactly one class.
- A *preorder* is reflexive and transitive. A *partial order* is a preorder that is also antisymmetric. A *total order* is a partial order that is also complete.
- In economics, a preference relation $\succsim$ on a set of bundles is called *rational* if it is complete and transitive. Here $x \succsim y$ reads “$x$ is at least as good as $y$”. *Strict preference* $x \succ y$ means $x \succsim y$ and not $y \succsim x$, and *indifference* $x \sim y$ means both $x \succsim y$ and $y \succsim x$.

## Functions

A *function* $f : A \to B$ assigns to each $x \in A$ exactly one element $f(x) \in B$. The set $A$ is the *domain* and $B$ the *codomain*. In an arrow diagram, exactly one arrow leaves each element of $A$; an element of $B$ may receive any number of arrows, including none.

**Images and preimages.** For $C \subseteq A$ and $D \subseteq B$:

$$
f(C) = \{f(x) : x \in C\} \subseteq B, \qquad
f^{-1}(D) = \{x \in A : f(x) \in D\} \subseteq A .
$$

$f(C)$ is the *image* of $C$, and $f(A)$ is the *range* of $f$. $f^{-1}(D)$ is the *preimage* of $D$. The preimage is defined for **every** function: the notation does not assume that $f$ has an inverse.

**Injective, surjective, bijective.**

- $f$ is *injective* (one-to-one) if $\forall x, x' \in A : f(x) = f(x') \to x = x'$. In the diagram, no element of $B$ receives more than one arrow.
- $f$ is *surjective* (onto) if $\forall y \in B\; \exists x \in A : f(x) = y$, that is, $f(A) = B$. Every element of $B$ receives at least one arrow.
- $f$ is *bijective* if it is both. Every element of $B$ receives exactly one arrow.

**Composition.** For $f : A \to B$ and $g : B \to C$, the composite $g \circ f : A \to C$ is defined by $(g \circ f)(x) = g(f(x))$. For $f : A \to A$, the composite $f \circ f$ is defined, and $f \circ f = f$ means $f(f(x)) = f(x)$ for every $x \in A$. Two special functions on $A$ are the *identity*, $f(x) = x$ for every $x$, and the *constant* functions, $f(x) = c$ for every $x$ and some fixed $c$.

**The pigeonhole principle.** If $m$ objects are placed in $n$ boxes and $m > n$, then some box contains at least two objects.

Test these definitions in [Tool 02](../../sets_relations_functions.html). Some of its exercises ask for a relation or function with a given list of properties, and some of those lists cannot be met. Showing *why* is part of the exercise.
