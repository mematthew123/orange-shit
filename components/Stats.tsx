const stats = [
    {
        id: 1,
        name: 'Women who have accused Trump of sexual misconduct',
        value: '25+',
    },
    {
        id: 2,
        name: 'Years of documented friendship with Epstein',
        value: '15-20',
    },
    {
        id: 3,
        name: 'Court-ordered damages to E. Jean Carroll',
        value: '$88.3M',
    },
    { id: 4, name: 'Time span of allegations', value: '1970s-2024' },
];

export default function Stats() {
    return (
        <div className='bg-background py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl'>
                            Key Facts and Figures
                        </h2>
                        <p className='mt-4 text-lg/8 text-muted-foreground'>
                            A summary of documented allegations and
                            relationships
                        </p>
                    </div>
                    <dl className='mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className='flex flex-col bg-card p-8 transition-all duration-200 hover:bg-accent'
                            >
                                <dt className='text-sm/6 font-semibold text-muted-foreground'>
                                    {stat.name}
                                </dt>
                                <dd className='order-first text-3xl font-semibold tracking-tight text-card-foreground'>
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
