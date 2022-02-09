<script context="module">
	export async function load({ url, fetch, params }) {
		const id = params.id;

		const qs = url.search; //url.serchparams에서 그냥 search 로 변경됨
		// const param = new URLSearchParams(qs);
		// param.set('name', 'ffffffff');
		// const end = param.toString();
		// console.log(end);

		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const pages = await res.json();

		if (res.ok) {
			return {
				props: {
					pages
				}
			};
			return {
				status: res.status,
				error: new Error('xxxxxxxxxxxxxxxxxxxxx')
			};
		}
	}
</script>

<script>
	export let pages;

	// console.log(pages);
</script>

<h2>{pages.title}</h2>
