import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";
import { isTSAnyKeyword } from "@babel/types";
import { JestEnvironment } from "@jest/environment";

it("changes submit button label to 'Saving..' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={JestEnvironment.fn()}
      onChange={JestEnvironment.fn()}
      saving
    />
  );
  expect(tree).toMatchSnapShot();
});

it("changes submit button label to 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={JestEnvironment.fn()}
      onChange={JestEnvironment.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapShot();
});
