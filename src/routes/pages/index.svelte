<script context="module">
	export async function load({ fetch, url, params }) {
		const res = await fetch('https://yts.mx/api/v2/list_movies.json');
		const pages = await res.json();
		console.log(pages);
		const qs = url.searchParams;

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
	import Title from '$lib/title.svelte';
	export let pages;
	console.log(pages);
</script>

<Title />
<h1>Pages</h1>
<nav>
	<ul>
		<li><a href="/pages/page1">page1</a></li>
		<li><a href="/pages/page2">page2</a></li>
	</ul>
</nav>

<ul>
	{#each pages as page}
		<li><a href={`/pages/${page.id}`}>{page.title}</a></li>
	{/each}
</ul>
