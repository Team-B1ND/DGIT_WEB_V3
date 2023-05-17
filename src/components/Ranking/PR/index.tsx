import { useGetPullRequestRank } from "../../../queries/github/github.query";
import Medal from "../../common/Medal";
import RankingList from "../../common/RankingList";
import { ProfileImg } from "../Commit/style";

const PR = () => {
  const { data } = useGetPullRequestRank();
  return (
    <RankingList.Table.TBody>
      {data?.data.map((data, idx) => {
        const rank = idx + 1;
        return (
          <>
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={rank}>{rank}</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                <ProfileImg src={data.userImage} />
              </RankingList.Table.TBody.Td>{" "}
              <RankingList.Table.TBody.Td>
                {data.githubId}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.name}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.bio}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.pullRequest}
              </RankingList.Table.TBody.Td>
            </tr>
          </>
        );
      })}
    </RankingList.Table.TBody>
  );
};

export default PR;
