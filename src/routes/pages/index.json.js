//json 부분이 api 경로
//여기서 요청 및 요청 삭제 등을 처리하는 함수 작성 가능
//여기서 데이터 베이스와 연결
export async function get() {
	//프론트로 반환하는 코드
	const pages = [
		{ id: 1, title: 'title1' },
		{ id: 2, title: 'title2' },
		{ id: 3, title: 'title3' },
		{ id: 4, title: 'title4' },
		{ id: 5, title: 'title5' }
	];

	//guides데이터를 프론트로 반환
	//응답 부분에 json 데이터로 다시 전송
	return {
		status: 200,
		body: { pages }
	};
}
