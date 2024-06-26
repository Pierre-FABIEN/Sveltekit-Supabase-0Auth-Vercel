<script lang="ts">
  import { onMount } from 'svelte'
  import { setTransitionLoader } from '$stores/UX/transitionLoaderStore'
  import { fetchMockData } from '$lib/utils/mockService'
  import { enter, exit } from './transition'
  import { isAnimatingOut } from '$stores/UX/isAnimating'
  import { onNavigate } from '$app/navigation'
  import Items from '$components/Items/Items.svelte'
  import Box from '$components/three/Box.svelte'
  import type { PageData } from "./$types";

  let title: HTMLElement
  let text: HTMLElement
  let link: HTMLElement
  let path: string | null
  
  onNavigate((navigation) => {
    path = navigation.to?.route.id ?? null
  })

  onMount(async () => {
    setTransitionLoader(false)
    fetchMockData
  })

  
</script>

<svelte:head>
  <title>Page d'exemple</title>
  <meta
    name="description"
    content="Ceci est une description de la page d'exemple."
  />
</svelte:head>

<div
  class="home"
  in:enter="{{ duration: 1, title, text, link }}"
  out:exit="{{ duration: 1, title, text, link }}"
>
<Items />
<Box />
</div>

<style>
  .home {
    width: 100vw;
    position: absolute;
    background-color: rgb(150, 150, 150);
  }
</style>
