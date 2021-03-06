---
componentId: filtered_search
title: FilteredSearch
status: Alpha
---

The FilteredSearch component helps style a Dropdown and a TextInput side-by-side.

**Note:** You _must_ use a `TextInput` and `Dropdown` (or native `<details>` and `<summary>`) in order for this component to work properly.

## Default example

```jsx live
<FilteredSearch>
  <ActionMenu>
    <ActionMenu.Button as="summary">Filter</ActionMenu.Button>
    <ActionMenu.Overlay>
      <ActionList direction="sw">
        <ActionList.Item>Item 1</ActionList.Item>
        <ActionList.Item>Item 2</ActionList.Item>
        <ActionList.Item>Item 3</ActionList.Item>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>
  <TextInput icon={SearchIcon} />
</FilteredSearch>
```

## Component props

#### FilteredSearch.Children

| Name     | Type              | Default | Description                                                                                              |
| :------- | :---------------- | :-----: | :------------------------------------------------------------------------------------------------------- |
| children |                   |         | FilteredSearch is expected to contain a [`Dropdown`](/Dropdown) followed by a [`TextInput`](/TextInput). |
| sx       | SystemStyleObject |   {}    | Style to be applied to the component                                                                     |
