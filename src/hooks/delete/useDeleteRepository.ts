import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useDeleteRepositoryQuery } from "../../queries/github/github.query";
import { QUERY_KEYS } from "../../queries/queryKey";

export function useDeleteRepositroy() {
  const deleteRepositoryMutation = useDeleteRepositoryQuery();
  const queryClient = new QueryClient();
  const onDeleteRepo = useCallback((repositoryId: number) => {
    const answer = window.confirm("레포지토리를 삭제하시겠습니까?");
    if (answer === true) {
      deleteRepositoryMutation.mutate(
        {
          repositoryId: repositoryId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEYS.github.getRepository]);
            B1ndToast.showSuccess("레포지토리 삭제 성공");
          },
          onError: () => {
            B1ndToast.showError("레포지토리 삭제 실패");
          },
        }
      );
    }
  }, []);

  return { onDeleteRepo };
}
