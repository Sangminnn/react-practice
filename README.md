# React-Prac Project

### TMI

github을 돌아다니던 중, [https://github.com/addisonglobal/frontend-technical-test](https://github.com/addisonglobal/frontend-technical-test) 라는 페이지를 보고 공부하던 기술들을 활용해서 간단하게 만들어 보려고 시작.

처음에는 ts를 공부해보려고해서 ts로 만들어보려고했지만 시간이 너무 길어질것같아서 일단 패스.

평소에는 class형 component를 활용하여 react component를 만들어 왔는데,

공부하다보니 react hooks 의 형태도 알아두면 좋을것같은 생각에 이번에 만드는건 hooks 를 사용하여 만들게 되었다.

view에 관련된 내용은 component, logic이 들어간 내용은 container 폴더에 나누어 정리하였다.

### 사용한 기술

- react ( hooks)
- redux-actions
- react-redux
- immer
- redux-saga
- axios
- styled-components

### Project 구조

- MainContainer
    - Header

    - ListMenu (우측 list 버튼을 눌렀을 때 나오는 component )
        - MenuItem
    - MainComponent
        - ListItems
            - ListItem → Buttons → Button , 이후 내용들은 component로 이루어져있음

### 하면서 부족하다고 느낀 점

1. 문서로만 공부하던 ts를 직접 적용해보려고하니 react-redux, react-actions 등 여러 module과 섞어 사용하려니 type정의 부분에서 자주 막히는 느낌이 있었음. 이 부분을 더 공부해보는게 좋겠다.
2. 진행하면서 비슷한 내용을 상속받는 입장에서 파일간의 네이밍 규칙을 정해 정리하는 연습을 해야겠다.
3. 큰 틀에서 봤을 때에 todo-project와 비슷하다는 느낌을 받았음. 기본적인 내용이라고 생각했는데도 만드는데 생각보다는 시간이 더 걸린 점에서 공부가 부족하다고 느낌
