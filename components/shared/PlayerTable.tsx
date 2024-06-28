'use client';
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel
} from '@tanstack/react-table';
import player from '@/public/assets/player.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
type Player = {
  date: string;
  player: string;
  from: string;
  to: string;
  price: string;
  image: any; // URL of the player's image
  clubImage: any;
  transferClub: any;
};

const data = [
  {
    date: '20-07-2023',
    player: 'Khaled Abdel-fattah',
    from: 'Smouha',
    to: 'Al-Ahly',
    price: '30M$',
    image: player,
    clubImage: player,
    transferClub: player
  },
  {
    date: '17-06-2023',
    player: 'Zeiad Tarek',
    from: 'Al-Ahly',
    to: 'Smouha',
    price: '10M$',
    image: player,
    clubImage: player,
    transferClub: player
  },
  {
    date: '20-04-2023',
    player: 'Hossam Hassan',
    from: 'El-Ettihad',
    to: 'Pyramids FC',
    price: '10M$',
    image: player,
    clubImage: player,
    transferClub: player
  },
  {
    date: '14-12-2022',
    player: 'Belal El-Sayed',
    from: 'Pyramids FC',
    to: 'El-Ettihad',
    price: '30M$',
    image: player,
    clubImage: player,
    transferClub: player
  }
  // Add more rows as needed
];

const columnHelper = createColumnHelper<Player>();

const columns = [
  columnHelper.accessor('date', {
    header: 'Date'
  }),
  columnHelper.accessor('player', {
    header: 'Player',
    cell: info => (
      <div className="flex items-center">
        <Image
          src={info.row.original.image}
          alt={info.row.original.player}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>{info.getValue()}</span>
      </div>
    )
  }),
  columnHelper.accessor('from', {
    header: 'From',
    cell: info => (
      <div className="flex items-center">
        <Image
          src={info.row.original.clubImage}
          alt={info.row.original.player}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>{info.getValue()}</span>
      </div>
    )
  }),
  columnHelper.accessor('to', {
    header: 'To',
    cell: info => (
      <div className="flex items-center">
        <Image
          src={info.row.original.clubImage}
          alt={info.row.original.player}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>{info.getValue()}</span>
      </div>
    )
  }),
  columnHelper.accessor('price', {
    header: 'Price'
  })
];

// eslint-disable-next-line no-undef
const PlayerTable: React.FC = () => {
  const { t } = useTranslation();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="container mx-auto overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" shadow-2xl flex justify-center items-center align-middle  w-full">
        {/* <select
            className="bg-white w-full"
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value));
            }}>
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select> */}
        <Button
          value={table.getState().pagination.pageSize}
          variant={'destructive'}
          onClick={e => {
            table.setPageSize(Number(e.target));
          }}>
          {t('Show More')}
        </Button>
      </div>
    </div>
  );
};

export default PlayerTable;
