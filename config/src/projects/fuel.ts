import {
  DATA_AVAILABILITY,
  EXITS,
  FORCE_TRANSACTIONS,
  OPERATOR,
  RISK_VIEW,
  STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const fuel: Project = {
  name: 'Fuel',
  slug: 'fuel',
  bridges: [
    {
      address: '0x6880f6Fd960D1581C2730a451A22EED1081cfD72',
      sinceBlock: 11787727,
      tokens: ['DAI', 'USDC', 'USDT'],
    },
  ],
  details: {
    purpose: 'Payments',
    links: {
      websites: ['https://fuel.sh/'],
      apps: [],
      documentation: ['https://docs.fuel.sh/'],
      explorers: ['https://mainnet.fuel.sh/network/'],
      repositories: ['https://github.com/FuelLabs/fuel-v1-contracts'],
      socialMedia: [
        'https://discord.gg/xfpK4Pe',
        'https://twitter.com/fuellabs_',
      ],
    },
    riskView: {
      stateValidation: RISK_VIEW.STATE_FP_1R,
      dataAvailability: RISK_VIEW.DATA_ON_CHAIN,
      upgradeability: RISK_VIEW.UPGRADABLE_YES,
      operatorCensoring: RISK_VIEW.CENSORING_PROPOSE_BLOCKS,
      operatorDown: RISK_VIEW.DOWN_PROPOSE_BLOCKS,
    },
    technology: {
      category: {
        name: 'Optimistic Rollup',
        details: 'UTXO based',
      },
      stateCorrectness: {
        ...STATE_CORRECTNESS.FRAUD_PROOFS,
        references: [
          {
            text: 'Background - Fuel documentation',
            href: 'https://docs.fuel.sh/v1.1.0/Concepts/Fundamentals/Fuel%20Overview.html#background',
          },
        ],
      },
      dataAvailability: {
        ...DATA_AVAILABILITY.ON_CHAIN,
        references: [
          {
            text: 'Background - Fuel documentation',
            href: 'https://docs.fuel.sh/v1.1.0/Concepts/Fundamentals/Fuel%20Overview.html#background',
          },
        ],
      },
      operator: {
        ...OPERATOR.CENTRALIZED_SEQUENCER,
        references: [
          {
            text: 'Architecture: A High-Level View - Fuel documentation',
            href: 'https://docs.fuel.sh/v1.1.0/Concepts/Fundamentals/Fuel%20Overview.html#architectureahighlevelview',
          },
          {
            text: 'Mainnet deployment parameters - Fuel documentation',
            href: 'https://docs.fuel.sh/v1.1.0/Concepts/Fundamentals/Deployment%20Parameters.html#mainnet',
          },
        ],
      },
      forceTransactions: {
        ...FORCE_TRANSACTIONS.PROPOSE_OWN_BLOCKS,
        references: [
          {
            text: 'Architecture: A High-Level View - Fuel documentation',
            href: 'https://docs.fuel.sh/v1.1.0/Concepts/Fundamentals/Fuel%20Overview.html#architectureahighlevelview',
          },
        ],
      },
      exitMechanisms: [
        {
          ...EXITS.REGULAR('optimistic', 'merkle proof'),
          references: [
            {
              text: 'Withdraw.yulp#L40 - Fuel documentation',
              href: 'https://github.com/FuelLabs/fuel-v1-contracts/blob/master/src/Withdraw.yulp#L40',
            },
          ],
        },
      ],
      contracts: {
        addresses: [
          {
            address: '0x6880f6Fd960D1581C2730a451A22EED1081cfD72',
            name: 'Fuel',
          },
        ],
        risks: [],
      },
    },
    news: [
      {
        date: '2020-01-19',
        name: 'Announcing the Fuel v0 Open Beta',
        link: 'https://fuellabs.medium.com/announcing-the-fuel-v0-open-beta-565a2d340fc3',
      },
    ],

    // DEPRECATED ITEMS BELOW

    technologyName: 'Optimistic Rollup',
    technologyDetails: 'UTXO',
    parameters: [
      {
        name: 'Primary use case',
        value: 'Payments',
      },
      {
        name: 'Hypothetical level of decentralization',
        sentiment: 'good',
        value: 'High',
      },
      {
        name: 'Current level of decentralization',
        sentiment: 'warning',
        tooltip:
          "Optimistic rollups require 3rd party validators to submit fraud proofs. B/c of current lack of the adoption users can't trust that such validators are running.",
        value: 'Medium',
      },
      {
        name: 'Can funds be stolen by the operator?',
        sentiment: 'good',
        value: 'No',
      },
      {
        name: 'Permissionless?',
        sentiment: 'good',
        tooltip:
          'Anyone can submit a new root that can become part of the rollup after a delay',
        pointers: [
          {
            name: 'Block.yulp#L95-L101 - Fuel source code',
            href: 'https://github.com/FuelLabs/fuel/blob/49c35e8de752200175174a08b6a8eae42796790d/src/Block.yulp#L95-L101',
          },
        ],
        value: 'Yes',
      },
      {
        name: 'Privacy',
        value: 'No',
      },
      {
        name: 'Smart contracts',
        value: 'No',
      },
    ],
  },
}
