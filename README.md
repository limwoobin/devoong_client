# typescript_web

typescript + reack hooks

폴더구조

<pre>
<code>
| src
  | actions : action type 정의
  | api : api 호출 정보 정의
  | components
    | common : 공통 컴포넌트 정의
    | page : tsx 페이지 경로 정의
    | views
      | MenuPage : 메뉴 컴포넌트 
      | MyProfile : 프로필 컴포넌트
      | Notice : 공지사항 컴포넌트
      | Post : 포스트 컴포넌트
      | User : User 컴포넌트
      | Board : 게시판 컴포넌트
      | Comment : 댓글 컴포넌트
      | Layout : 레이아웃 컴포넌트
  | containers : redux & component 연결 컨테이너
  | core : 설정 모듈
    | code : 코드 정의
    | http : http 설정
    | models : API Receive 모델 정의
    | util : 공통 함수
  | images : 이미지 폴더
  | reducers : reducer 함수 정의
  | sagas : redux saga 설정 정의
  | styles : 공통 style 정의
  </code>
  </pre>
