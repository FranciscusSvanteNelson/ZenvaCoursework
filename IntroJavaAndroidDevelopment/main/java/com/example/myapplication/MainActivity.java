package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    private EditText mColorInput;
    private TextView mColorOutput;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mColorInput = findViewById(R.id.colorInput);
        mColorOutput = findViewById(R.id.colorOutput);
    }

    public void updateColorText(View view) {

        String color = mColorInput.getText().toString().toLowerCase();
        String message = "";

        switch (color) {
            case "blue":
                message = "Your favorite is BLUE";
                mColorOutput.setText(message);
                mColorOutput.setTextColor(Color.BLUE);

                break;
            case "green":
                message = "Your favorite is GREEN";
                mColorOutput.setText(message);
                mColorOutput.setTextColor(Color.GREEN);
                break;
            case "yellow":
                message = "Your favorite is YELLOW";
                mColorOutput.setText(message);
                mColorOutput.setTextColor(Color.YELLOW);
                break;
            case "black":
                message = "Your favorite is BLACK";
                mColorOutput.setText(message);
                mColorOutput.setTextColor(Color.BLACK);
                break;
            case "red":
                message = "Your favorite is RED";
                mColorOutput.setText(message);
                mColorOutput.setTextColor(Color.RED);
                break;

            default:
                message = "Great choice!";
                mColorOutput.setText(message);
                mColorOutput.setTextColor(Color.BLACK);

                break;
        }

    }
}