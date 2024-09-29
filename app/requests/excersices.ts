export async function getExcersices(orgSlug: string) {
    const data = await fetch(`/${orgSlug}/exercise.json`)

    console.log(await data.json())
}