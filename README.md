# Graduation Project! 마지막 졸업작품
---
1주일동안 아래 졸업작품을 마무리하고 제출합니다.
이때까지 배운 것을 토대로, 미니 트위터 클론을 완성합니다.
NextJS, Prisma, Tailwind, API Routes 그리고 SWR 를 활용하여 아래 페이지를 완성합니다.

/ : 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
/create-account : 계정을 생성하는 페이지입니다.
/log-in : 로그인을 진행하는 페이지입니다.
/tweet/[id] : 트윗의 상세 정보를 보는 페이지 입니다.
/:
After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.
로그인이 완료되었을 경우, 사용자는 데이터베이스에 존재하는 모든 트윗을 볼 수 있어야 합니다.
또한 트윗을 작성할 수 있어야 합니다.
/tweet/[id]:
The user should be able to see the tweet + a Like button.
When the Like button is pressed, save the like on the database and reflect the update using mutate from useSWR.
사용자는 id에 해당하는 트윗의 내용과 좋아요 버튼을 볼 수 있어야 합니다.
좋아요버튼을 클릭했 을 경우 좋아요의 상태값이 데이터베이스에 저장되어야 하며 useSWR의 mutate를 사용하여 업데이트를 반영해야 합니다.
참고사항
챌린지 blueprint에는 SQLite을 기반으로 한 Prisma가 설정되어있습니다.
prisma.schema파일을 변경했다면 npm run db-sync를 실행하세요.
SWR와 tailwind도 챌린지 blueprint에 설정되어 있습니다.
환경설정
블루프린트를 다운로드 받아. 로컬 컴퓨터에서 작업하세요.
Blueprint > File > Export to Zip
완료 후 컴퓨터에서 열고. npm i 을 실행하세요.
코딩 챌린지를 완료한 후. https://codesandbox.io/dashboard 으로 이동하여.
'Create Sandbox' > Import Project 한 후에 프로젝트의 깃헙 URL 을 복사. 붙여넣기 하면 됩니다.
제출방법
오늘의 템플릿: 위의 Today's Blueprint 버튼을 클릭하세요!
Code Sandbox라는 툴을 이용하여 제출합니다. 사용방법
제출기간: 다음주 월요일 오전 6시까지
챌린지 어떠셨나요?
마지막 피드백, 소감, 후기, 꿀팁 등을 꼬옥- 남겨주세요! 더 좋은 챌린지를 만드는데 커다란 힘이 됩니다.
게시판에 남기기
