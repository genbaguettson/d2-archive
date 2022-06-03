import gql from 'graphql-tag';

const GET_WEAPON_BY_NAME = gql`
query ($name : String!){
    weapon(where: { name: $name }) {
      archetype {
        title
        rpm
        frame
      }
      name
      source{
        soureIcon{
          url
        },
        sourceTitle
      }
      element
      image {
        url
        fileName
      }
      originTrait {
        name
        icon {
          url
        }
      }
      pveDescription {
        markdown
      }
      pveGodrolls {
        ... on PveRoll {
          title
          description{markdown}
          perk1 {
            name,
            icon{url}
          }
          perk2 {
            name,
            icon{url}
          }
          perk3 {
            name,
            icon{url}
          }
          perk4 {
            name,
            icon{url}
          }
          contentIndicators{name,, icon{url,height,width}}
        }
      }
      pveMasterworks {
        icon {
          url
        }
        masterwork
      }
      pvePerks {
        perk1 {
          name,
          icon{url}
        }
        perk2 {
          name,
          icon{url}
        }
        perk3 {
          name,
          icon{url}
        }
        perk4 {
          name,
          icon{url}
        }
      }
      pvpDescription {
        markdown
      }
      pvpMasterworks {
        masterwork
        icon {
          url
        }
      }
      pvpPerks {
        perk1 {
          name,
          icon{url}
        }
        perk2 {
          name,
          icon{url}
        }
        perk3 {
          name,
          icon{url}
        }
        perk4 {
          name,
          icon{url}
        }
      }
    }
  }
`;
// eslint-disable-next-line import/prefer-default-export
export default GET_WEAPON_BY_NAME;
