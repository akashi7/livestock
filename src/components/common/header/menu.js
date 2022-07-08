import { Menu } from 'antd'
export const DropMenu = (
    <Menu
        className='w-60 h-40'
        items={[
            {
                key: '1',
                label: 'item two'
            },
            {
                key: '4',
                danger: true,
                label: 'a danger item',
            },
        ]}
    />
);