import {IKPI} from '../../types';

interface KPICardsProps {
    data: IKPI[];
}

const KPICards: React.FC<KPICardsProps> = ({ data }) => {
    const getProgressColor = (value: number, target: number) => {
        return value >= target ? 'bg-green-500' : 'bg-red-500';
    };

    return(
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {data.map((kpi) =>(
                <div key={kpi._id} className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-lg font-semibold text-gray-700'>{kpi.name}</h3>
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                            kpi.trend === 'up' ? 'bg-green-500 text-white' :
                            kpi.trend === 'down' ? 'bg-red-500 text-white' :
                            'bg-gray-500 text-white'
                        }`}>
                            {kpi.trend === 'up' ? '▲' : kpi.trend === 'down' ? '▼' : '▶'}
                        </span>
                    </div>

                    <div className='flex items-baseline space-x-2'>
                        <span className='text-3xl font-bold'>
                            {kpi.value}
                        </span>
                        <span className='text-gray-500 text-sm'>
                            {kpi.unit}
                        </span>
                    </div>

                    <div className='mt-4'>
                        <div className='flex justify-between text-sm text-gray-600 font-medium'>
                            <span>Target</span>
                            <span>{kpi.target} {kpi.unit}</span>
                        </div>
                        <div className='mt-2 h-2.5 bg-gray-200 rounded-full overflow-hidden'>
                            <div
                                className={`h-full transition-all duration-300 ${getProgressColor(kpi.value, kpi.target)}`}
                                style={{ 
                                    width: `${(kpi.value / kpi.target) * 100}%`
                                }}
                            />
                        </div>
                    </div>                 
                </div>
            ))}
        </div>
    )
}

export default KPICards;