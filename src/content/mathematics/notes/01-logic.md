---
title: "Logic: propositions and quantifiers"
description: "Connectives and truth tables, logical equivalence, mathematical English, and quantifiers with their negations: the definitions behind Tool 01."
date: 2026-09-25
order: 1
---

This note collects the definitions and conventions used in [Tool 01](../../logic.html). It states what the symbols mean; the tool is where you test your understanding of them.

## Propositions and connectives

A *proposition* is a statement that is either true (T) or false (F). Compound propositions are built from simpler ones with *connectives*, each defined by its truth table:

| $p$ | $q$ | $\neg p$ | $p \land q$ | $p \lor q$ | $p \to q$ | $p \leftrightarrow q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

Three points deserve attention.

- **Or is inclusive.** $p \lor q$ is true when both $p$ and $q$ are true.
- **An implication fails in exactly one case.** In $p \to q$, $p$ is the *hypothesis* and $q$ the *conclusion*. The implication is false only when the hypothesis is true and the conclusion is false. In particular, $p \to q$ is true whenever $p$ is false; it is then said to be *vacuously true*.
- **The biconditional** $p \leftrightarrow q$ is true exactly when $p$ and $q$ have the same truth value.

**Reading formulas without brackets.** $\neg$ applies first, then $\land$, $\lor$, $\to$ and $\leftrightarrow$, in that order. So $\neg p \land q$ means $(\neg p) \land q$, and $p \land q \to r$ means $(p \land q) \to r$. Implication groups to the right: $p \to q \to r$ means $p \to (q \to r)$. When in doubt, use brackets.

## Logical equivalence

Two formulas $\varphi$ and $\psi$ are *logically equivalent*, written $\varphi \equiv \psi$, if they have the same truth value under every assignment of truth values to their variables. In other words, they agree on every row of their joint truth table. With $n$ variables there are $2^n$ rows.

To show that two formulas are **not** equivalent, one row is enough: an assignment on which they differ is a *counterexample*.

Two equivalences are used constantly:

$$
\neg(p \land q) \equiv \neg p \lor \neg q, \qquad \neg(p \lor q) \equiv \neg p \land \neg q \qquad \text{(De Morgan's laws)}
$$

$$
p \to q \;\equiv\; \neg q \to \neg p \qquad \text{(the contrapositive)}
$$

The *converse* of $p \to q$ is $q \to p$. It is **not** equivalent to $p \to q$: the row $p = \text{F}$, $q = \text{T}$ separates them.

Any other claimed equivalence can be settled with a truth table. Deriving them is the purpose of the first exercise set in the tool.

**Negation normal form.** A formula is in *negation normal form* if every $\neg$ applies directly to a variable, as in $\neg p$, never to a compound formula, as in $\neg(p \land q)$. Every formula can be rewritten in this form by pushing each $\neg$ inwards.

**Restricted connectives.** Each of the sets $\{\neg, \land\}$, $\{\neg, \lor\}$ and $\{\neg, \to\}$ is enough to express every connective in the table above. Finding the expressions is the second exercise set in the tool.

## Mathematical English

Mathematical writing uses a small number of fixed phrases, each with a precise meaning.

| Phrase | Symbols |
|:--|:--|
| if $p$, then $q$; $\;q$ if $p$; $\;p$ implies $q$ | $p \to q$ |
| $p$ only if $q$ | $p \to q$ |
| $p$ is sufficient for $q$ | $p \to q$ |
| $p$ is necessary for $q$ | $q \to p$ |
| $p$ if and only if $q$; $\;p$ is necessary and sufficient for $q$ | $p \leftrightarrow q$ |
| $p$ unless $q$ | $\neg q \to p$, equivalently $p \lor q$ |
| neither $p$ nor $q$ | $\neg p \land \neg q$ |
| $p$ but $q$ | $p \land q$ |

Two of these cause most mistakes.

- “$p$ **only if** $q$” says that $p$ cannot hold without $q$. It is $p \to q$, not $q \to p$.
- “$p$ **unless** $q$” is read *inclusively*. It asserts $p$ whenever $q$ fails, and says nothing about what happens when $q$ holds.

## Quantifiers

$\forall x\; P(x)$ means that $P(x)$ is true for every $x$ in the domain under discussion. $\exists x\; P(x)$ means that $P(x)$ is true for at least one $x$.

**Bounded quantifiers** restrict the range of the variable:

$$
\forall x \in A\; P(x) \;\text{ means }\; \forall x\,(x \in A \to P(x)), \qquad
\exists x \in A\; P(x) \;\text{ means }\; \exists x\,(x \in A \land P(x)).
$$

Expressions such as $\forall \varepsilon > 0$ and $\exists n \ge N$ are read in the same way.

**The order of different quantifiers matters.** In $\forall x\, \exists y\; P(x, y)$, the $y$ may depend on $x$. In $\exists y\, \forall x\; P(x, y)$, a single $y$ must work for every $x$. The second statement implies the first, but not conversely. On $\mathbb{R}$, for example, $\forall x\, \exists y\; (y > x)$ is true, while $\exists y\, \forall x\; (y > x)$ is false. Adjacent quantifiers of the same kind can be swapped: $\forall x\, \forall y$ means the same as $\forall y\, \forall x$, and likewise for $\exists$.

**Truth on a finite set.** A universal statement is shown false by a single *counterexample*, and shown true only by checking every element. An existential statement is shown true by a single *witness*. A universal implication $\forall x\,(P(x) \to Q(x))$ is vacuously true when no $x$ satisfies $P(x)$.

## Negating quantified statements

The two basic rules are

$$
\neg\, \forall x\; P(x) \;\equiv\; \exists x\; \neg P(x), \qquad
\neg\, \exists x\; P(x) \;\equiv\; \forall x\; \neg P(x).
$$

**Bounds stay as they are.** For example, $\neg\, \forall x \in A\; P(x) \equiv \exists x \in A\; \neg P(x)$. To see why, unpack the bound and use the rule for negating an implication:

$$
\neg(p \to q) \;\equiv\; p \land \neg q .
$$

So $\neg\, \forall x\,(x \in A \to P(x)) \equiv \exists x\,\neg(x \in A \to P(x)) \equiv \exists x\,(x \in A \land \neg P(x))$.

**Negated relations become their complements.** For real numbers,

$$
\neg(a < b) \equiv a \ge b, \qquad \neg(a \le b) \equiv a > b, \qquad \neg(a = b) \equiv a \ne b .
$$

Note that the complement of a strict inequality includes equality.

**Recipe.** To negate a statement fully, flip each quantifier ($\forall \leftrightarrow \exists$) and keep its bound. Then push $\neg$ inwards until it reaches the innermost claims, and replace each negated claim by its complement.

*Example.* The function $f$ is bounded on $A$:

$$
\exists M\; \forall x \in A : \lvert f(x) \rvert \le M .
$$

Its negation, “$f$ is unbounded on $A$”, is

$$
\forall M\; \exists x \in A : \lvert f(x) \rvert > M .
$$

Whatever bound $M$ is proposed, some $x \in A$ has $\lvert f(x) \rvert > M$.

Practise these rules in [Tool 01](../../logic.html). Its last two exercise sets negate the definitions of convergence and continuity, and evaluate quantified statements on a finite relation drawn as a graph.
