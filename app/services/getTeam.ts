interface Team {
    name: string;
    title: string;
    role: string;
    email: string;
    telephone: string;
    imageUrl: string;
}

export default async function getTeam(): Promise<{ data: Team[] | null }> {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + `/api/team`, {
            cache: 'no-store',
        });
        const res = await response.json();

        return {
            data: res?.data,
        };
    } catch (e) {
        console.log(e);

        return {
            data: null,
        };
    }
}
