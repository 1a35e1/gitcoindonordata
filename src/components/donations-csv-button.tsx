import { useMemo } from 'react';
import { CSVLink } from 'react-csv';

import { DONATIONS_COLUMNS } from '@/core/constants';
import { Donation } from '@/gql/graphql';

interface Props {
  donations: Donation[];
}

export const DonationsCSVButton = ({ donations }: Props) => {
  const csvData = useMemo(
    () => [
      [...DONATIONS_COLUMNS.map((d) => d.id!)],
      ...donations.map((d) => [
        d.timestamp,
        d.round?.roundMetadata.name,
        d.transactionHash,
        d.donorAddress,
        d.tokenAddress,
        d.amountInUsd,
      ]),
    ],
    [donations],
  );

  return (
    <div className="max-w-40 pb-8">
      {donations.length > 0 ? (
        <CSVLink
          data={csvData}
          target="_blank"
          filename="gitcoindonordata.csv"
          className="btn btn-sm flex gap-4"
        >
          <DownloadIcon />
          <span>Download CSV</span>
        </CSVLink>
      ) : null}
    </div>
  );
};

const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
      fill="black"
    />
  </svg>
);
