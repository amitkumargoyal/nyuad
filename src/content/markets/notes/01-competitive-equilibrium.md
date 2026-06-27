---
title: "Competitive equilibrium and surplus"
description: "Derive the equilibrium of a linear market, then measure the gains from trade with consumer and producer surplus."
date: 2026-06-10
order: 1
---

A market clears when buyers and sellers face the same price and wish to trade the same quantity. Before any algebra, the idea is simple: at a high price sellers offer more than buyers want; at a low price buyers want more than sellers offer; somewhere in between, plans are consistent. This note makes that point exact for the linear case used throughout the course, and then measures *how much* the market accomplishes.

## The linear market

Inverse demand and inverse supply are

$$
p = a - bq \qquad \text{and} \qquad p = c + dq,
$$

with $a > c \ge 0$, $b > 0$, $d > 0$. The intercept $a$ is the most any buyer is willing to pay; $c$ is the lowest price at which any seller is willing to produce.

## Equilibrium

Setting the two prices equal,

$$
a - bq = c + dq
\quad\Longrightarrow\quad
q^* = \frac{a - c}{b + d},
\qquad
p^* = a - bq^*.
$$

Since $a > c$, we have $q^* > 0$: there are mutually beneficial trades, and the market finds them. (When $a = c$ the curves meet on the price axis and $q^* = 0$ — the degenerate case shown as $0.00$ in [Tool 2](../../competitive_equilibrium.html).)

## Consumer surplus

A buyer who would have paid $p = a - bq$ for the $q$-th unit, but pays only $p^*$, gains the difference. Adding these gains over all units traded,

$$
CS = \int_0^{q^*} \big[(a - bq) - p^*\big]\, \mathrm{d}q = \tfrac{1}{2}\,(a - p^*)\,q^*,
$$

the area of the triangle between the demand curve and the price line.

## Producer surplus

Symmetrically, the seller of the $q$-th unit would have accepted $c + dq$ but receives $p^*$:

$$
PS = \int_0^{q^*} \big[p^* - (c + dq)\big]\, \mathrm{d}q = \tfrac{1}{2}\,(p^* - c)\,q^*.
$$

## Total surplus

$$
\begin{aligned}
TS &= CS + PS \\
   &= \tfrac{1}{2}(a - p^*)q^* + \tfrac{1}{2}(p^* - c)q^* \\
   &= \tfrac{1}{2}(a - c)\,q^*.
\end{aligned}
$$

Notice that $p^*$ drops out: total surplus depends only on the gap between the curves and the quantity traded. The price decides how the pie is *divided*; the quantity decides how *large* the pie is. 

---

**Try it yourself.** Open [Tool 2](../../competitive_equilibrium.html), set $a = 80$, $b = 0.8$, $c = 20$, $d = 1.2$, and verify: $q^* = 30$, $p^* = 56$, $CS = 360$, $PS = 540$, $TS = 900$.
