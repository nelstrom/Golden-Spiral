def phi
  (1 + Math.sqrt(5)) / 2
end
def long_edge(size)
  (1/phi) * size
end
def short_edge(size)
  size - long_edge(size)
end
puts long_edge(55)
puts short_edge(55)
