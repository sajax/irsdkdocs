# YawNorth <Badge text="float" />

*  **Unit:** [Radian](https://en.wikipedia.org/wiki/Radian)


::: tip Calculating Wind Direction Relative To Player Heading
Using YawNorth you can calculate the relative direction of the wind to the player using the
following formula.

<CodeGroup>
  <CodeGroupItem title="Python 3">

```python:no-line-numbers
((2 * math.pi) - sdk['YawNorth']) - sdk['WindDir']
```

  </CodeGroupItem>
</CodeGroup>

Useful for determining headwinds/tailwinds
:::
