---
exercise:
- name: squat
  weight: 150
  sets: [1, 2, 3]
- name: deadlift
  weight: 200
  sets: [4, 5, 7]
- name: too easy
  weight: 1
  sets: [8, 9, 10, 11, 12, 13, 14, 15]
---
```dataview
TABLE WITHOUT ID e.name, e.weight, e.sets, length(e.sets) WHERE file = this.file FLATTEN exercise as e
```
