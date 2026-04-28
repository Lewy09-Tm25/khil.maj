---
layout: post
title: Inverse functions
date: 2026-03-15 00:00:00-0600
description: A basic method for finding the derivative of an inverse function, and using it to derive the inverse itself.
tags: math
categories: notes
related_posts: false
author: Khilav Majmudar
---

Here I show a basic way to find the derivative of an inverse function and using that, finding the inverse function itself. For now confine ourselves to functions of one real variable.

Let $$y=f(x)$$. Then $$y'=\frac{dy}{dx}=f'(x)$$ and $$f^{-1}(y)=x$$, wherever the inverse is well-defined and injective. Then,

$$
\begin{align}
    & x=f^{-1}(y)=f^{-1}(f(x)) \nonumber \\
    \implies & 1=\frac{d (f^{-1}(f(x)))}{df(x)}\frac{df(x)}{dx} \nonumber \\
    \implies & \frac{d (f^{-1}(y))}{dy}=\frac{1}{f'(x)} \nonumber
\end{align}
$$

## Examples

Without knowing how to denote or name an inverse function a priori, we will use the designation $$\mathrm{inv}(y)$$.

**Example 1.** Let $$y=e^x$$. Then,

$$
\begin{align}
    & \frac{d (f^{-1}(y))}{dy}=\frac{1}{f'(x)}=\frac{1}{e^x}=\frac{1}{y} \nonumber \\
    \therefore \quad & \mathrm{inv}(y)=\int\frac{1}{y}\,dy \nonumber
\end{align}
$$

We call this integral $$\ln(y)+c$$, with $$c$$ being the integration constant. Now when $$y=1$$, $$\mathrm{inv}(y)$$, i.e., $$x$$, is zero. And we know that $$y=1 \implies \ln(1)=0$$. So, $$c=0$$.

**Example 2.** Let $$y=\sin(x)$$, $$x\in[-\frac{\pi}{2},\frac{\pi}{2}]$$. Then $$f'(x) = \cos(x)$$. We know $$\cos(x) = \sqrt{1 - \sin^2(x)}$$. We take the positive root because cosine is non-negative on our domain. Substituting $$y = \sin(x)$$ yields $$f'(x) = \sqrt{1 - y^2}$$.

$$
\begin{align}
    & \frac{d (f^{-1}(y))}{dy}=\frac{1}{f'(x)}=\frac{1}{\sqrt{1 - y^2}} \nonumber \\
    \therefore \quad & \mathrm{inv}(y)=\int\frac{1}{\sqrt{1 - y^2}}\,dy \nonumber
\end{align}
$$

This integral defines the arcsine function, $$\arcsin(y) + c$$. Here, $$y=0 \implies x=0$$, and $$\arcsin(0) = 0$$, so $$c=0$$.

**Example 3.** Let $$y=\tanh(x)$$. The derivative is $$f'(x) = \mathrm{sech}^2(x)$$. Using the identity $$\mathrm{sech}^2(x) = 1 - \tanh^2(x)$$, we can substitute $$y = \tanh(x)$$ to express the derivative in terms of $$y$$, yielding $$f'(x) = 1 - y^2$$.

$$
\begin{align}
    & \frac{d (f^{-1}(y))}{dy}=\frac{1}{f'(x)}=\frac{1}{1 - y^2} \nonumber \\
    \therefore \quad & \mathrm{inv}(y)=\int\frac{1}{1 - y^2}\,dy \nonumber
\end{align}
$$

This integral defines the inverse hyperbolic tangent function, $$\mathrm{artanh}(y) + c$$. Since $$y=0 \implies x=0$$, and $$\mathrm{artanh}(0) = 0$$, we find that $$c=0$$.
