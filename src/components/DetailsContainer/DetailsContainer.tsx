import { Button, Descriptions, Input, message } from "antd";
import { usePersonStore } from "@/hooks/store";
import { StyledButtonsContainer, StyledDetailsContainer } from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getLocalStorageValue,
  removeLocalStorageValue,
  setLocalStorageValue,
} from "@/helpers/localStorage";
import { Person } from "@/types/person";

const renderKeys = [
  "name",
  "birth_year",
  "eye_color",
  "gender",
  "hair_color",
  "skin_color",
  "height",
  "mass",
];

const DetailsContainer = () => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [localData, setLocalData] = useState<Person>({});
  const { personStore } = usePersonStore();
  const [messageApi, contextHolder] = message.useMessage();
  const handleEdit = () => {
    setEditMode((state) => !state);
  };
  const handleSave = () => {
    setLocalStorageValue(personStore.name, localData);
    setEditMode(false);
    showMessage("Saved successfully");
  };
  const handleRestore = () => {
    removeLocalStorageValue(personStore.name);
    setLocalData(personStore);
    setEditMode(false);
    showMessage("Locally saved data has been deleted");
  };
  const showMessage = (message: string) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };
  useEffect(() => {
    const storedData = getLocalStorageValue(personStore.name);
    setLocalData(storedData || personStore);
  }, [personStore]);

  return (
    <StyledDetailsContainer>
      {localData.name && (
        <>
          <Descriptions
            bordered
            title="Details"
            extra={
              <Button onClick={() => router.push("/")} type="primary">
                Go Back
              </Button>
            }
            column={1}
          >
            {Object.keys(localData).map((key) => {
              if (renderKeys.includes(key)) {
                return (
                  <Descriptions.Item label={key.replace(/_/g, " ")} key={key}>
                    {editMode ? (
                      <Input
                        defaultValue={localData[key]}
                        placeholder={`Edit ${key.replace(/_/g, " ")}`}
                        value={localData[key]}
                        onChange={(e) => {
                          setLocalData({ ...localData, [key]: e.target.value });
                        }}
                      />
                    ) : (
                      localData[key]
                    )}
                  </Descriptions.Item>
                );
              }
            })}
          </Descriptions>
          <StyledButtonsContainer>
            <Button type="primary" onClick={handleEdit}>
              {editMode ? "Close" : "Edit"}
            </Button>
            {editMode && (
              <>
                <Button danger onClick={handleRestore}>
                  Restore
                </Button>
                <Button type="primary" onClick={handleSave}>
                  Save
                </Button>
              </>
            )}
          </StyledButtonsContainer>
        </>
      )}
      {contextHolder}
    </StyledDetailsContainer>
  );
};

export default DetailsContainer;
